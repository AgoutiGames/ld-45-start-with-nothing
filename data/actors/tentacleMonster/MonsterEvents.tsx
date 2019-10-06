<?xml version="1.0" encoding="UTF-8"?>
<tileset name="MonsterEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../../tilesets/symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="MonsterAnimate"/>
  </properties>
 </tile>
 <tile id="1" type="AeMoveDirection">
  <properties>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="NAME" value="MWright"/>
  </properties>
 </tile>
</tileset>
