import { QuestionData } from '@common/types';

import { Project } from '../../project';

export class ApprovalManager {
  private alwaysApproveForRunKeys: Set<string> = new Set();

  constructor(private readonly project: Project) {}

  public async handleApproval(key: string, text: string, subject?: string): Promise<[boolean, string | undefined]> {
    const isApprovedFromSet = this.alwaysApproveForRunKeys.has(key);
    if (isApprovedFromSet) {
      return [true, undefined]; // Pre-approved
    }

    const questionData: QuestionData = {
      baseDir: this.project.baseDir,
      text,
      subject,
      defaultAnswer: 'y',
      answers: [
        { text: '(Y)es', shortkey: 'y' },
        { text: '(N)o', shortkey: 'n' },
        { text: '(A)lways', shortkey: 'a' },
        { text: 'Always for This (R)un', shortkey: 'r' },
      ],
      key,
    };

    const [answer, userInput] = await this.project.askQuestion(questionData);

    if (answer === 'r') {
      this.alwaysApproveForRunKeys.add(key);
      return [true, undefined]; // Approved and remember for this run
    }

    if (answer === 'y') {
      return [true, undefined]; // Approved for this instance
    }

    return [false, userInput]; // Not approved
  }
}
