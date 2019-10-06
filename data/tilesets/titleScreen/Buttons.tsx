<?xml version="1.0" encoding="UTF-8"?>
<tileset name="Buttons" tilewidth="640" tileheight="640" tilecount="9" columns="3">
 <image source="buttons.png" width="1920" height="1920"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Try"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="12" y="228" width="620" height="184"/>
  </objectgroup>
 </tile>
 <tile id="1" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Quit"/>
   <property name="ON_MOUSE" value="QuitCollision"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="150" y="180" width="400" height="280"/>
  </objectgroup>
 </tile>
 <tile id="2" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Play"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="160" y="190" width="400" height="250"/>
  </objectgroup>
  <animation>
   <frame tileid="5" duration="100"/>
   <frame tileid="2" duration="100"/>
  </animation>
 </tile>
 <tile id="3" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Try"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="12" y="228" width="620" height="184"/>
  </objectgroup>
  <animation>
   <frame tileid="0" duration="100"/>
   <frame tileid="3" duration="100"/>
  </animation>
 </tile>
 <tile id="4" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Quit"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="150" y="180" width="400" height="280"/>
  </objectgroup>
  <animation>
   <frame tileid="1" duration="100"/>
   <frame tileid="4" duration="100"/>
  </animation>
 </tile>
 <tile id="5" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Play"/>
   <property name="ON_MOUSE" value="PlayCollision"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Click" x="160" y="190" width="400" height="250"/>
  </objectgroup>
 </tile>
 <tile id="6">
  <objectgroup draworder="index">
   <object id="1" name="Click" x="160" y="150" width="400" height="250"/>
  </objectgroup>
 </tile>
 <tile id="7">
  <objectgroup draworder="index">
   <object id="1" name="Click" x="160" y="150" width="400" height="250"/>
  </objectgroup>
 </tile>
</tileset>
