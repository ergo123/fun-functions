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
