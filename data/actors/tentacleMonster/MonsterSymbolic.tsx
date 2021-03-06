<?xml version="1.0" encoding="UTF-8"?>
<tileset name="MonsterSymbolic" tilewidth="384" tileheight="384" tilecount="1" columns="1">
 <image source="monster.png" width="384" height="384"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="TentacleMonster"/>
   <property name="DIRECTION" value="LEFT"/>
   <property name="LATE_POLLING" type="bool" value="false"/>
   <property name="ON_ACTIVATION" value="SetupMonster"/>
   <property name="ON_ALWAYS" value="MonsterPhysics"/>
   <property name="ON_COLLISION" value="MonsterCollision"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Deadly" x="141.333" y="34.6667" width="128" height="268"/>
   <object id="2" x="82" y="14" width="245" height="343"/>
  </objectgroup>
 </tile>
</tileset>
