import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { MdClose, MdKeyboardArrowUp } from 'react-icons/md';
import { useDebounce } from 'react-use';

import { useClickOutside } from '@/hooks/useClickOutside';
import { useBooleanState } from '@/hooks/useBooleanState';
import { useSettings } from '@/context/SettingsContext';

export type ModelSelectorRef = {
  open: () => void;
};

type Props = {
  models: string[];
  selectedModel?: string;
  onChange: (model: string) => void;
};

export const ModelSelector = forwardRef<ModelSelectorRef, Props>(({ models, selectedModel, onChange }, ref) => {
  const { settings, saveSettings } = useSettings();
  const [modelSearchTerm, setModelSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [highlightedModelIndex, setHighlightedModelIndex] = useState(-1);
  const [visible, show, hide] = useBooleanState(false);
  const modelSelectorRef = useRef<HTMLDivElement>(null);
  const highlightedModelRef = useRef<HTMLDivElement>(null);

  useDebounce(
    () => {
      setDebouncedSearchTerm(modelSearchTerm);
    },
    300,
    [modelSearchTerm],
  );

  useClickOutside(modelSelectorRef, hide);

  useEffect(() => {
    if (!visible) {
      setHighlightedModelIndex(-1);
      setModelSearchTerm('');
    }
  }, [visible]);

  useImperativeHandle(ref, () => ({
    open: show,
  }));

  const toggleVisible = useCallback(() => {
    if (visible) {
      hide();
    } else {
      show();
    }
  }, [visible, hide, show]);

  const onModelSelected = (model: string) => {
    onChange(model);
    hide();
  };

  const onModelSelectorSearchInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!settings) {
      return;
    }

    const visiblePreferredModels = debouncedSearchTerm ? [] : settings.models.preferred;
    const sortedModels = [...visiblePreferredModels, ...models.filter((model) => !visiblePreferredModels.includes(model))];
    const filteredModels = sortedModels.filter((model) => model.toLowerCase().includes(modelSearchTerm.toLowerCase()));

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedModelIndex((prev) => {
          const newIndex = Math.min(prev + 1, filteredModels.length - 2);
          setTimeout(() => highlightedModelRef.current?.scrollIntoView({ block: 'nearest' }), 0);
          return newIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedModelIndex((prev) => {
          const newIndex = Math.max(prev - 1, 0);
          setTimeout(() => highlightedModelRef.current?.scrollIntoView({ block: 'nearest' }), 0);
          return newIndex;
        });
        break;
      case 'Enter':
        if (highlightedModelIndex !== -1) {
          e.preventDefault();
          const selectedModel = filteredModels[highlightedModelIndex];
          onModelSelected(selectedModel);
        }
        break;
      case 'Escape':
        e.preventDefault();
        hide();
        break;
    }
  };

  const renderModelItem = (model: string, index: number) => {
    if (!settings) {
      return null;
    }

    const isPreferred = settings.models.preferred.includes(model);
    index = index + (isPreferred || debouncedSearchTerm ? 0 : settings.models.preferred.length);

    const handleRemovePreferredModel = (e: React.MouseEvent) => {
      e.stopPropagation();

      const updatedSettings = {
        ...settings,
        models: {
          ...settings.models,
          preferred: settings.models.preferred.filter((m) => m !== model),
        },
      };

      void saveSettings(updatedSettings);
    };

    return (
      <div
        key={model}
        ref={index === highlightedModelIndex ? highlightedModelRef : undefined}
        className={`flex items-center w-full hover:bg-neutral-700 transition-colors duration-200 ${index === highlightedModelIndex ? 'bg-neutral-700' : 'text-neutral-300'}`}
      >
        <button
          onClick={() => onModelSelected(model)}
          className={`flex-grow px-3 py-1 text-left text-xs
                        ${model === selectedModel ? 'text-white font-bold' : ''}`}
        >
          {model}
        </button>
        {isPreferred && (
          <button
            onClick={handleRemovePreferredModel}
            className="px-2 py-1 text-neutral-500 hover:text-neutral-400 transition-colors duration-200"
            title="Remove from preferred models"
          >
            <MdClose className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="relative" ref={modelSelectorRef}>
      <button onClick={toggleVisible} className="flex items-center hover:text-neutral-300 focus:outline-none transition-colors duration-200 text-xs">
        <span>{selectedModel || 'Loading...'}</span>
        <MdKeyboardArrowUp className="w-3 h-3 ml-1 transform rotate-180" />
      </button>
      {visible && (
        <div className="absolute top-full left-0 mt-1 bg-neutral-900 border border-neutral-700 rounded-md shadow-lg z-10 flex flex-col w-[600px]">
          <div className="sticky top-0 p-2 border-b border-neutral-700 bg-neutral-900 rounded-md z-10">
            <input
              type="text"
              autoFocus={true}
              placeholder="Search models..."
              className="w-full px-2 py-1 text-xs bg-neutral-800 text-white rounded border border-neutral-600 focus:outline-none focus:border-neutral-500"
              value={modelSearchTerm}
              onChange={(e) => setModelSearchTerm(e.target.value)}
              onKeyDown={onModelSelectorSearchInputKeyDown}
            />
          </div>
          <div className="overflow-y-auto scrollbar-thin scrollbar-track-neutral-800 scrollbar-thumb-neutral-700 hover:scrollbar-thumb-neutral-600 max-h-48">
            {!debouncedSearchTerm && (
              <>
                {settings?.models.preferred.map(renderModelItem)}
                <div key="divider" className="border-t border-neutral-700 my-1" />
              </>
            )}
            {...models
              .filter((model) => !settings?.models.preferred.includes(model) && model.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
              .map(renderModelItem)}
          </div>
        </div>
      )}
    </div>
  );
});

ModelSelector.displayName = 'ModelSelector';
