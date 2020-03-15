type AAA = {
  res: Record<string, any>;
};

export function test(a: number): AAA {
  return {
    res: {},
  };
}

test(10);

export function toAST(code: string) {}
