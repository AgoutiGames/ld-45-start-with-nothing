<?xml version="1.0" encoding="UTF-8"?>
<tileset name="ArcShot" tilewidth="128" tileheight="128" tilecount="20" columns="5">
 <image source="singleShot4.png" width="640" height="512"/>
 <tile id="0" type="ACTOR_ANIMATION">
  <properties>
   <property name="ACTOR_NAME" value="ArcShot1"/>
   <property name="ANIMATION_TYPE" value="IDLE"/>
   <property name="DIRECTION" value="DOWN"/>
  </properties>
  <animation>
   <frame tileid="0" duration="41"/>
   <frame tileid="1" duration="41"/>
   <frame tileid="2" duration="41"/>
   <frame tileid="3" duration="41"/>
   <frame tileid="4" duration="41"/>
   <frame tileid="5" duration="41"/>
   <frame tileid="6" duration="41"/>
   <frame tileid="7" duration="41"/>
   <frame tileid="8" duration="41"/>
   <frame tileid="9" duration="41"/>
   <frame tileid="11" duration="41"/>
   <frame tileid="12" duration="41"/>
   <frame tileid="13" duration="41"/>
   <frame tileid="14" duration="41"/>
   <frame tileid="15" duration="41"/>
   <frame tileid="16" duration="41"/>
   <frame tileid="17" duration="4"/>
   <frame tileid="18" duration="41"/>
   <frame tileid="19" duration="41"/>
  </animation>
 </tile>
 <tile id="1" type="ACTOR_TEMPLATE">
  <properties>
   <property name="ACTOR_NAME" value="ArcShot1"/>
   <property name="ON_ACTIVATION" value="SetOffArc"/>
   <property name="ON_ALWAYS" value="ArcShotPhysics"/>
   <property name="ON_COLLISION" value="ShotCollision"/>
  </properties>
  <objectgroup draworder="index">
   <object id="1" name="Hurt" x="54" y="54" width="22" height="22"/>
   <object id="2" x="60" y="60" width="8" height="8"/>
  </objectgroup>
 </tile>
</tileset>
