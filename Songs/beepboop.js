//: s("[bd <hh oh>]*2").bank("tr909").dec(.4)


setCps(170/60/4)


$: stack(s("bd:4").beat("0,7?,10", 16),
         s("sd:2").beat("4,12", 16))
         .almostNever(x => x.gain(-1))
$: n("5 4 <0 -8> <7 7 [~ 0]>").scale("<<C5:major D3:mixolydian>/4 C3:major>").rib(20, 7.5)
     .sometimesBy(.15, x => x.speed("-1"))
     .almostNever(x => x.distort(0.5))
     .sound("square").fast(2)
     .room(2).hpf(1400).gain(.05).distort("5:.2")
     

$: s("rim:1").struct(rand.mul(.65).round().seg(16).rib(3,2))
$: n("[0 5 4 <0 [~ ~ 3 ~]>]").scale("C2:major").sound("bongo").gain(20)

$: s("supersaw!8").struct(rand.mul(.5).round).seg(16)
                  .lpf(saw.range(10, 2000)
                  .fast(2)).distort("0.5")
                  .room(saw.range(0.8, 1.8).fast(5))
