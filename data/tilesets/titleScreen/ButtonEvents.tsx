<?xml version="1.0" encoding="UTF-8"?>
<tileset name="ButtonEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="AteMouseButtons">
  <properties>
   <property name="NAME" value="ClickedOn"/>
  </properties>
 </tile>
 <tile id="1" type="GeQuit">
  <properties>
   <property name="NAME" value="QuitGame"/>
  </properties>
 </tile>
 <tile id="2" type="AeWait">
  <properties>
   <property name="NAME" value="ShortWait"/>
   <property name="TIME" type="float" value="0.2"/>
  </properties>
 </tile>
 <tile id="3" type="AeSetAnimFrame">
  <properties>
   <property name="ANIMATION_FRAME" value="1"/>
   <property name="NAME" value="SetAnimGreen"/>
  </properties>
 </tile>
 <tile id="4" type="AeSound">
  <properties>
   <property name="NAME" value="ClickSound"/>
   <property name="PATH" type="file" value="../../audio/click.ogg"/>
  </properties>
 </tile>
 <tile id="5" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadSecondMap"/>
   <property name="PATH" type="file" value="../../maps/map2.tmx"/>
  </properties>
 </tile>
 <tile id="6" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadThirdMap"/>
   <property name="PATH" type="file" value="../../maps/map3.tmx"/>
  </properties>
 </tile>
 <tile id="8" type="AeMulti">
  <properties>
   <property name="1" value="ClickSound"/>
   <property name="2" value="SetAnimGreen"/>
   <property name="3" value="ShortWait"/>
   <property name="4" value="QuitGame"/>
   <property name="NAME" value="ClickOnQuit"/>
  </properties>
 </tile>
 <tile id="9" type="AteSwitch">
  <properties>
   <property name="1" value="ClickedOn"/>
   <property name="NAME" value="QuitCollision"/>
   <property name="SUCCESS" value="ClickOnQuit"/>
  </properties>
 </tile>
 <tile id="10" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadFirstMap"/>
   <property name="PATH" type="file" value="../../maps/map1.tmx"/>
  </properties>
 </tile>
 <tile id="11" type="AeMulti">
  <properties>
   <property name="1" value="ClickSound"/>
   <property name="2" value="SetAnimGreen"/>
   <property name="3" value="ShortWait"/>
   <property name="4" value="LoadFirstMap"/>
   <property name="NAME" value="ClickOnPlay"/>
  </properties>
 </tile>
 <tile id="12" type="AteSwitch">
  <properties>
   <property name="1" value="ClickedOn"/>
   <property name="NAME" value="PlayCollision"/>
   <property name="SUCCESS" value="ClickOnPlay"/>
  </properties>
 </tile>
 <tile id="20" type="AeMoveStatic">
  <properties>
   <property name="NAME" value="TryAgainPos"/>
   <property name="X_POS" type="float" value="386"/>
   <property name="Y_POS" type="float" value="968"/>
  </properties>
 </tile>
 <tile id="21" type="AeMoveStatic">
  <properties>
   <property name="NAME" value="QuitPos"/>
   <property name="X_POS" type="float" value="920"/>
   <property name="Y_POS" type="float" value="980"/>
  </properties>
 </tile>
 <tile id="30" type="MePlayMusic">
  <properties>
   <property name="NAME" value="TitleScreenMusic"/>
   <property name="PATH" type="file" value="../../audio/fire-1.ogg"/>
  </properties>
 </tile>
 <tile id="32" type="AeMulti">
  <properties>
   <property name="1" value="ClickSound"/>
   <property name="2" value="SetAnimGreen"/>
   <property name="3" value="ShortWait"/>
   <property name="4" value="LoadSecondMap"/>
   <property name="NAME" value="ClickOnPlay2"/>
  </properties>
 </tile>
 <tile id="33" type="AteSwitch">
  <properties>
   <property name="1" value="ClickedOn"/>
   <property name="NAME" value="PlayCollision2"/>
   <property name="SUCCESS" value="ClickOnPlay2"/>
  </properties>
 </tile>
 <tile id="42" type="AeMulti">
  <properties>
   <property name="1" value="ClickSound"/>
   <property name="2" value="SetAnimGreen"/>
   <property name="3" value="ShortWait"/>
   <property name="4" value="LoadThirdMap"/>
   <property name="NAME" value="ClickOnPlay3"/>
  </properties>
 </tile>
 <tile id="43" type="AteSwitch">
  <properties>
   <property name="1" value="ClickedOn"/>
   <property name="NAME" value="PlayCollision3"/>
   <property name="SUCCESS" value="ClickOnPlay3"/>
  </properties>
 </tile>
</tileset>
