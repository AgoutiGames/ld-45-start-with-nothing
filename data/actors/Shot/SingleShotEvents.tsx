<?xml version="1.0" encoding="UTF-8"?>
<tileset name="SingleShotEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../../tilesets/symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="AeAccelerate">
  <properties>
   <property name="NAME" value="ShotAccLeft"/>
   <property name="XFACTOR" type="float" value="-999999999"/>
   <property name="XMAX_SPEED" type="float" value="-1800"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="1" type="AeAccelerate">
  <properties>
   <property name="NAME" value="ShotAccRight"/>
   <property name="XFACTOR" type="float" value="999999999"/>
   <property name="XMAX_SPEED" type="float" value="1800"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="2" type="AteMath">
  <properties>
   <property name="NAME" value="ShotCheckDir"/>
   <property name="VAL1" value="*LOOK_RIGHT"/>
   <property name="VAL2" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="3" type="AteSwitch">
  <properties>
   <property name="1" value="ShotCheckDir"/>
   <property name="FAILURE" value="ShotAccLeft"/>
   <property name="NAME" value="SetOffMovement"/>
   <property name="SUCCESS" value="ShotAccRight"/>
  </properties>
 </tile>
 <tile id="4" type="AeSound">
  <properties>
   <property name="NAME" value="SingleShotSound"/>
   <property name="PATH" type="file" value="../../audio/midTone.ogg"/>
  </properties>
 </tile>
 <tile id="5" type="AeMulti">
  <properties>
   <property name="1" value="SingleShotSound"/>
   <property name="2" value="SetOffMovement"/>
   <property name="NAME" value="SetOffSingle"/>
  </properties>
 </tile>
 <tile id="10" type="AeAnimate">
  <properties>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="ShotAnimate"/>
  </properties>
 </tile>
 <tile id="11" type="AeMove">
  <properties>
   <property name="NAME" value="ShotMove"/>
  </properties>
 </tile>
 <tile id="12" type="AeEraseThis">
  <properties>
   <property name="NAME" value="VanishShotErase"/>
  </properties>
 </tile>
 <tile id="13" type="AeSound">
  <properties>
   <property name="NAME" value="VanishShotSound"/>
   <property name="PATH" type="file" value="../../audio/shotVanish2.ogg"/>
  </properties>
 </tile>
 <tile id="14" type="AeMulti">
  <properties>
   <property name="1" value="VanishShotSound"/>
   <property name="2" value="VanishShotErase"/>
   <property name="NAME" value="VanishShot"/>
  </properties>
 </tile>
 <tile id="19" type="AeMulti">
  <properties>
   <property name="1" value="ShotAnimate"/>
   <property name="2" value="ShotMove"/>
   <property name="NAME" value="ShotPhysics"/>
  </properties>
 </tile>
 <tile id="20" type="AteCollision">
  <properties>
   <property name="NAME" value="CheckSelfCollide"/>
   <property name="OTHER_NAME" value="PLAYER"/>
  </properties>
 </tile>
 <tile id="22" type="AteSwitch">
  <properties>
   <property name="1" value="CheckSelfCollide"/>
   <property name="FAILURE" value="VanishShot"/>
   <property name="NAME" value="ShotCollision"/>
  </properties>
 </tile>
 <tile id="30" type="AeAccelerate">
  <properties>
   <property name="NAME" value="ShotGravity"/>
   <property name="XFACTOR" type="float" value="0"/>
   <property name="YFACTOR" type="float" value="3500"/>
   <property name="YMAX_SPEED" type="float" value="1800"/>
  </properties>
 </tile>
 <tile id="31" type="AeAccelerate">
  <properties>
   <property name="NAME" value="ShotArcLeft"/>
   <property name="XFACTOR" type="float" value="-9999999"/>
   <property name="XMAX_SPEED" type="float" value="-1200"/>
   <property name="YFACTOR" type="float" value="-9999999"/>
   <property name="YMAX_SPEED" type="float" value="-1500"/>
  </properties>
 </tile>
 <tile id="32" type="AeAccelerate">
  <properties>
   <property name="NAME" value="ShotArcRight"/>
   <property name="XFACTOR" type="float" value="9999999"/>
   <property name="XMAX_SPEED" type="float" value="1200"/>
   <property name="YFACTOR" type="float" value="-9999999"/>
   <property name="YMAX_SPEED" type="float" value="-1500"/>
  </properties>
 </tile>
 <tile id="33" type="AteSwitch">
  <properties>
   <property name="1" value="ShotCheckDir"/>
   <property name="FAILURE" value="ShotArcLeft"/>
   <property name="NAME" value="SetOffArcShot"/>
   <property name="SUCCESS" value="ShotArcRight"/>
  </properties>
 </tile>
 <tile id="34" type="AeSound">
  <properties>
   <property name="NAME" value="ArcShotSound"/>
   <property name="PATH" type="file" value="../../audio/lowTone.ogg"/>
  </properties>
 </tile>
 <tile id="35" type="AeMulti">
  <properties>
   <property name="1" value="ArcShotSound"/>
   <property name="2" value="SetOffArcShot"/>
   <property name="NAME" value="SetOffArc"/>
  </properties>
 </tile>
 <tile id="39" type="AeMulti">
  <properties>
   <property name="1" value="ShotAnimate"/>
   <property name="2" value="ShotGravity"/>
   <property name="3" value="ShotMove"/>
   <property name="NAME" value="ArcShotPhysics"/>
  </properties>
 </tile>
</tileset>
