
setCps(93/60/4)



//$: note("<[A4#, D5, F5, A5] [A4, C5, E5, G5] [G4, A#4, D5, F5] [[F4, A4, C5, E5] [F#4, A4, C5, D#5]]>").s("piano")

let distance = slider(0, 0, 1)
let panning = perlin.range(0, 1).round()

let lerp_sig = (a, b, t) => a.add(b.sub(a).mul(t))

let half_as_sig = slider(0.5)
let left_pan  = lerp_sig(half_as_sig, panning, distance)
let right_pan = lerp_sig(half_as_sig, panning.mul(-1).add(1), distance)

let claps = s("jazz:12").struct("[0 <1 [1 1]>]!2").almostNever(x=>x.ply(2))
let rhythm = stack(
           s("[bd:6 ~]!2"),
           claps,)


let notes = `
<[C3,  E3,  G4,  B3]
 [A3,  C4,  E3, G3]
 [D3,  F3,  A3,  C4]
 [[G4, B3,  D#5, F3]
  [G3, Bb4, D4,  F4]]
>
`

let alter_notes = `
<[C2,  E3,  G2,  B3]
 [A3,  C2,  E3, G2]
 [D2,  F3,  A2,  C4]
 [[G3, B2,  F3]
  [G5, Bb4, D2,  F4]]
>
`

let triplet_notes = `
<[[G4 E5 C4]
  [G4 E5 C4]
  [G4 E5 C4]
  [F5 E5 F4]]>
`

let triplet_notes2 = `
<[[C4 G5 C4]
  [G4 G5 G4]
  [G4 E5 G4]
  [F5 G5 F4]]>
`




let trip_synth = s("clavisynth:3!12").note(triplet_notes).lpf("<2000 1500>@7 20000")
let trip_kalim = s("kalimba!12").note(triplet_notes2).hpf(200)
let piano      = s("piano").room(0.4)



$center: stack(
//  rhythm,
)

//"<C7 Am7 Dm7 [G7#5 Gm7]>
$left: stack(
//  piano.note(notes),
 // trip_synth
).pan(left_pan)

$right: stack(
//  piano.note(alter_notes),
 // trip_kalim
).pan(right_pan)