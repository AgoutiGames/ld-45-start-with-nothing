<?xml version="1.0" encoding="UTF-8"?>
<tileset name="MonsterSymbolic" tilewidth="384" tileheight="384" tilecount="1" columns="1">
 <image source="monster.png" width="384" height="384"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="TentacleMonster"/>
   <property name="DIRECTION" value="LEFT"/>
   <property name="ON_ALWAYS" value="MonsterAnimate"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Deadly" x="141.333" y="34.6667" width="128" height="268"/>
  </objectgroup>
 </tile>
</tileset>
