let runrun = sprites.create(img`
    .e..............e.......
    .b.e..........ebb.......
    .bbbee......eebbb.......
    .bbbee......eebbb.......
    .bbbbee.ee.eebbbb.......
    ..bbeeeeeeeeeeb.........
    ..eeeeeebbeeeee.........
    ..eeeffebbeeffe.........
    ..eefffebbefffe.........
    bbbbfffdeedfffbbbb......
    dbbbfffdffdfffbbbd......
    .dbbbbddddddbbbdd.......
    ..ddbbbbbbbbbbdc....d...
    .......eeee........dddd.
    .....eeeeeeee.....dddddd
    ....eeebbbbeee....bdbddb
    ....eeebbbbeee....bdbddb
    ..dd..ebbbbe..dc..ebebbe
    ..eee.ebefbe.ee...eeeeee
    ..eee.ebbbbe.ee..eeeeee.
    .......eeeeeeeeeeeeee...
    .......e..eeeeeeeeee....
    .......d..d..eeeee......
    .......d..d..eeeee......
    `, SpriteKind.Player)
controller.moveSprite(runrun)
scene.setBackgroundColor(5)