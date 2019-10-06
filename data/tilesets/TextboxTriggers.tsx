<?xml version="1.0" encoding="UTF-8"?>
<tileset name="TextboxTriggers" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Textbox1"/>
   <property name="ON_COLLISION" value="SpawnTB1"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="1" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Textbox2"/>
   <property name="ON_COLLISION" value="SpawnTB2"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="2" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Textbox3"/>
   <property name="ON_COLLISION" value="SpawnTB3"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="3" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Textbox4"/>
   <property name="ON_COLLISION" value="SpawnTB4"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="4" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Textbox5"/>
   <property name="ON_COLLISION" value="SpawnTB5"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="5" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Map2Trigger"/>
   <property name="ON_COLLISION" value="LoadMap2"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="6" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="Map3Trigger"/>
   <property name="ON_COLLISION" value="LoadMap3"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="7">
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="8">
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="9">
  <objectgroup draworder="index">
   <object id="1" name="Trigger" x="0" y="0" width="60" height="60"/>
  </objectgroup>
 </tile>
 <tile id="10" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Textbox1"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="11" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Textbox2"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="12" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Textbox3"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="13" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Textbox4"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="14" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Textbox5"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="15" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Map2Trigger"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
 <tile id="16" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="Map3Trigger"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
 </tile>
</tileset>
