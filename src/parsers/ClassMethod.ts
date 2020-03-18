import get from 'lodash/get';

export default function(node: any): string {
  return get(node, 'key.name', 'ClassMethod');
}
