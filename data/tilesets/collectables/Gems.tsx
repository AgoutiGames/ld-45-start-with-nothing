<?xml version="1.0" encoding="UTF-8"?>
<tileset name="Gems" tilewidth="128" tileheight="128" tilecount="6" columns="3">
 <image source="gemsFull.png" width="384" height="256"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Gem1"/>
   <property name="ON_COLLISION" value="Gem1Coll"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Pickup" x="25" y="25" width="78" height="78"/>
  </objectgroup>
 </tile>
 <tile id="1" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Gem2"/>
   <property name="ON_COLLISION" value="Gem2Coll"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Pickup" x="25" y="25" width="78" height="78"/>
  </objectgroup>
 </tile>
 <tile id="2" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Gem3"/>
   <property name="ON_COLLISION" value="Gem3Coll"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Pickup" x="25" y="25" width="78" height="78"/>
  </objectgroup>
 </tile>
 <tile id="3" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Gem1"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="4" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Gem2"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="5" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Gem3"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
</tileset>
