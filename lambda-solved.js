const repl = require('repl');
const local = repl.start({
  preview: false,
  prompt: 'λ '
});

const I = a => a;
const M = f => f(f);
const T = a => b => a;
const F = a => b => b;
const NOT = b => b(F)(T);
const AND = a => b => a(b)(F);
const OR = a => b => a(T)(b);
const BEQ = a => b => a(b)(b(F)(T));

local.context.I = I;
local.context.M = M;
local.context.T = T;
local.context.F = F;
local.context.NOT = NOT;
local.context.AND = AND;
local.context.OR = OR;
local.context.BEQ = BEQ;

const n0 = f => a => a;
const n1 = f => a => f(a);
const n2 = f => a => f(f(a));
const n3 = f => a => f(f(f(a)));
const n4 = f => a => f(f(f(f(a))));
const print = n => n(x => x + 1)(0);
const succ = n => f => a => f(n(f)(a));
const add = n => k => n(succ)(k);
const mult = n => k => f => n(k(f));
// or: const mult = n => k => n(add(k))(n0)
const pow = n => k => k(n);
// or: const pow = n => k => k(mult(n))(n1)

local.context.n0 = n0;
local.context.n1 = n1;
local.context.n2 = n2;
local.context.n3 = n3;
local.context.n4 = n4;
local.context.print = print;
local.context.succ = succ;
local.context.add = add;
local.context.mult = mult;
local.context.pow = pow;
