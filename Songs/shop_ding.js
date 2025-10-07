// "Shop Ding" @by blazingkin

setcpm(145/4)

const gp = gamepad(0)

let intro_melody = note(`<[[d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] - [d4,e4,g4,d5] [d4,e4,g4,d5]] [[d4,e4,g4,d5] - [d4,e4,g4,d5] - [d4,e4,g4,d5] - - - [d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] [d4,e4,g4,d5] - - -] - ->`)
let intro_bass   = note(`<[d1 - - d1] [- - - - - - - - d1 d1 d1 d1 d1 - - -] [d2 - - d2 d2 - - d2] [d2 - - d2 d2 - - d2]>`)


let first_line_melody = note(`<[- [b3,d4,a4] [b3,d4,a4] - [b3,d4,g4] [b3,d4,g4] - [b3,d4,f#4]] [[b3,d4,f#4] - [b3,d4,e4] [b3,d4,e4] - - - -] [- [b3,d4,a4] [b3,d4,a4] - [b3,d4,g4] [b3,d4,g4] - [b3,d4,f#4]] [[b3,d4,f#4] - [b3,d4,e4] [b3,d4,e4] - - - -]>`)
let first_line_bass   = note(`<[g1 - - g1 d2 - - d2] [g1 - - g1 d2 - - d2] [g1 - - g1 d2 - - d2] [g1 - - g1 d2 - - b1]>`)

let second_line_melody = note(`<[- [e4,g4,d5] [e4,g4,d5] - [e4,g4,c5] [e4,g4,c5] - [e4,g4,b4]] [[e4,g4,b4] - [e4,g4,a4] [e4,g4,a4] - - - -] [- [d#4,g4,d5] [d#4,g4,d5] - [d#4,g4,c5] [d#4,g4,c5] - [c4,d#4,a#4]] [[c4,d#4,a#4] - [c4,d#4,a4] [c4,d#4,a4] - [d#4,g4] - -]>`)
let second_line_bass   = note(`< [c2 - - c2 g1 - - g1] [c2 - - c2 g1 - - g1] [c2 - - c2 g1 - - e1] [f1 - - f1 c2 - - c2]>`)

let bridge_line1_melody  = note(`<  [[d4,f#4] - - - [b3,d4,f#4] - a4 [a#3,c#4,e4]] - [- - - [a3,d#4] [c4,e4] f#4 g4 a4] [[d4,f4,b4] [f4,g#4,c5]]>`)
let bridge_line1_bass    = note(`<  [b1 - - b1 f#1 - - f#1] [a#1 - - a#1 e1 - - e1] [a1 - - a1 e1 - - e1] [g#1 - - d2 e2 e1 f#1 g#1]>`)

let bridge_line2_melody  = note(`<  [[c4,g4,b4] - [c4,e4] [c4,e4] - [c4,g4,b4] - [c4,f#4,a#4]] [- - [c4,d#4] [c4,d#4] - [c4,f#4,a#4] - [b3,d4,f#4,a4]] [- - [f#4,b4,d5] - - [f#4,b4,d5] - -] [- - [a4,c#5,e5] [a4,c#5,e5] [a4,c5,d#5] [a4,c5,d#5] [a4,c5,d#5] -]>`)
let bridge_line2_bass    = note(`<  [a1 - - a1 e1 - - e1] [g#1 - - g#1 d#2 - - f#1] [g1 - - g1 d2 - - g1] [f#1 - - a#1 b1 a#1 b1 d#1]>`)


let beeps_line1_melody = note(`<[[b4,d#5] [g#4,b4,f#5] [g#4,b4,f#5] - [g#4,b4,e5] [g#4,b4,e5] - [g#4,b4,d#5]] [[g#4,b4,d#5] - [g#4,b4,c#5] [g#4,b4,c#5] - [d#4,f#4,g#4,b4] - -] [[f#4,g#4] [g#4,b4,f#5] [g#4,b4,f#5] - [g#4,b4,e5] [g#4,b4,e5] - [g#4,b4,d#5]] [[g#4,b4,d#5] - [g#4,b4,c#5] [g#4,b4,c#5] - [d#4,f#4,g#4,b4] - -]>`)
let beeps_line2_melody = note(`<[[d4,f#4,g#4] [g4,b4,f#5] [g4,b4,f#5] - [g4,b4,e5] [g4,b4,e5] - [g4,b4,d5]] [[g4,b4,d5] - [g4,b4,c#5] [g4,b4,c#5] - [c#4,e4,f#4,a4] - -] [[e4,f#4] [f#4,a4,e5] [f#4,a4,e5] - [f#4,a4,d5] [f#4,a4,d5] - [f#4,a4,c#5]] [[f#4,a4,c#5] - [f#4,a4,b4] [f#4,a4,b4] - [c#4,e4,a4] - -]>`)
let beeps_line3_melody = note(`<[[e4,g#4,b3] - [e4,g#4] [e4,g#4] - [e4,b4] - [d#4,f#4]] [b3 a3] [d4 f#4 - [c#4,f4] [d4,f#4] [e4,g#4] [f#4,a4] [g#4,b4]] [[d4,f#4,g#4,c#5] [d4,f#4,g#4,c5]]>`)

let beeps_line1_bass   = note(`<[e1 - - e1 b1 - - d#1] [e1 - - e1 b1 - - b1] [e1 - - e1 b1 - - d#2] [e2 - - g#1 b1 - - d#1]>`)
let beeps_line2_bass   = note(`<[e1 - - e1 b1 - - g#1] [a1 - - a1 e2 - - c#2] [d2 - - d2 a1 - - d2] [d#2 - - d#2 d2 - - d2]>`)
let beeps_line3_bass   = note(`<[c#2 - - c#2 g#1 - - g#1] [b1 - - b1 f#1 - - f#1] [b1 - - b1 f#1 - - f#1] [e1 - - d#2 e2 e1 f#1 g#1]>`) 

let drop_melody        = note(`<    [[c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] - - -] [- - [c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] [c#4,g#4,b4] -] [[c4,g4,b4] [c4,g4,b4] [c4,g4,b4] [c4,g4,b4] [c4,g4,b4] - - -] [- - - - - - - - [c4,f#4,b4] [c4,f#4,b4] [c4,f#4,b4] [c4,f#4,b4] [c4,f#4,b4] - - -]>`)
let drop_bass          = note(`<    [a1,a2] [- [a1,a2] - -] [a1,a2] ->`)

let drums1 = stack(
  s("hh:1!4").struct("0 1 0 1").almostNever(x=>x.ply(2)).sometimesBy(0.05, x=>x.rev),
  s("rolandmt32_bd:6!4").struct("1 0 1 0"),
)

let drums2 = stack(
  s("sd:7!4").struct("0 1 0 1"),
  s("lt:7!r").struct("1 0 1 0")
)

let bass_sound = "kalimba:5"
//let bass_sound = "gm_slap_bass_1:1"
//let bass_sound   = "<space space:1>"

// Calm at the end
//let bass_sound = "didgeridoo"

//let melody_sound = "intentionally_not_a_sound"
let melody_sound = "piano"
//let melody_sound = "supersaw"

let intro = stack(intro_melody.s(melody_sound), intro_bass.s(bass_sound))
let first_line = stack(first_line_melody.s(melody_sound), first_line_bass.s(bass_sound))
let second_line = stack(second_line_melody.s(melody_sound),second_line_bass.s(bass_sound))
let bridge_line1 = stack(bridge_line1_melody.s(melody_sound),bridge_line1_bass.s(bass_sound))
let bridge_line2 = stack(bridge_line2_melody.s(melody_sound),bridge_line2_bass.s(bass_sound))
let beeps_line1 = stack(beeps_line1_melody.s(melody_sound),beeps_line1_bass.s(bass_sound))
let beeps_line2 = stack(beeps_line2_melody.s(melody_sound),beeps_line2_bass.s(bass_sound))
let beeps_line3 = stack(beeps_line3_melody.s(melody_sound),beeps_line3_bass.s(bass_sound))
let drop = stack(drop_melody.s(melody_sound),drop_bass.s(bass_sound))
let song = cat(intro.fast(4),first_line.fast(4),second_line.fast(4),bridge_line1.fast(4),bridge_line2.fast(4),beeps_line1.fast(4),beeps_line2.fast(4),beeps_line3.fast(4),
               drop.fast(4),bridge_line1.fast(4),bridge_line2.fast(4),beeps_line1.fast(4),beeps_line2.fast(4),beeps_line3.fast(4),drop.fast(4)).slow(4)


let speed = slider(1, 1, 1.4)

$: stack(
  song
//  .swing(4)
    .legato(.5)
//  .jux(x => x.ply(2))
//  .struct(rand.mul(0.6)).segment(8)
//  .room(saw.range(0.8, 1.4))
//  .distort("2:0.25")
  ,

  stack(
//  drums1
//  .room(0.8)
//  .swing(4)
//  .struct(rand.mul(0.7)).almostNever(x=>x.segment(16))


//  ,drums2
//  .room(0.8)
//  .swing(4)
//  .xfade(saw.range(0, 1).fast(4))
  )
)
.fast(speed.mul(saw.fast(20).range(0.9, 1.1)))

