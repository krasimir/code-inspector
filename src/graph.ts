import { NormalizedNode } from './types';

export default function graph(nodes: NormalizedNode[]): string {
  return `
    graph LR
      A --- D
      B-->C[fa:fa-ban forbidden]
      B-->D(fa:fa-spinner goo);
  `;
}
