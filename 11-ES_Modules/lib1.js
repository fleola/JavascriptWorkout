export const { sqrt } = Math;

export function square(x) {
  return x * x;
}

export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

export default () => "Default";

//È possibile anche usare la sintassi seguente per importare tutto insieme, si specifica alla fine in questo caso
// export {sqrt, square, diag}
