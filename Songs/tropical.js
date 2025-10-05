

setCpm(170/4)

const energy = slider(0.761)


$drums: stack(
  s("bd:1").beat("0,7?,10", 16),
  s("sd:2").beat("4,12",16),
  s("hh!8")
)
$synth: s("supersaw!8").note("A E Eb").room(slider(1.402, 0, 2)).dist(energy).pdecay(.12 * energy)


$pingy: note("[[C5,E2,<G1 [~ G2] [~ ~ G3]>] [C3,C4] [E4,C2]](<3 5>,<4 8>)").s("gm_steel_drums").speed(-1).gain(1.4)




