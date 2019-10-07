<?xml version="1.0" encoding="UTF-8"?>
<tileset name="Map1Events" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../tilesets/symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="TB1"/>
   <property name="NAME" value="UnhideTB1"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="1" type="MeLayerState">
  <properties>
   <property name="HIDE" type="bool" value="true"/>
   <property name="LAYER_NAME" value="TB1"/>
   <property name="NAME" value="HideTB1"/>
  </properties>
 </tile>
 <tile id="2" type="AeWait">
  <properties>
   <property name="NAME" value="KeepTBVisible"/>
   <property name="TIME" type="float" value="10"/>
  </properties>
 </tile>
 <tile id="3" type="AeEraseThis">
  <properties>
   <property name="NAME" value="RemoveTrigger"/>
  </properties>
 </tile>
 <tile id="4" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB1"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB1"/>
   <property name="4" value="RemoveTrigger"/>
   <property name="NAME" value="xSpawnTB1"/>
  </properties>
 </tile>
 <tile id="5" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="xSpawnTB1"/>
   <property name="NAME" value="SpawnTB1"/>
  </properties>
 </tile>
 <tile id="10" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="TB2"/>
   <property name="NAME" value="UnhideTB2"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="11" type="MeLayerState">
  <properties>
   <property name="HIDE" type="bool" value="true"/>
   <property name="LAYER_NAME" value="TB2"/>
   <property name="NAME" value="HideTB2"/>
  </properties>
 </tile>
 <tile id="14" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB2"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB2"/>
   <property name="4" value="RemoveTrigger"/>
   <property name="NAME" value="xSpawnTB2"/>
  </properties>
 </tile>
 <tile id="15" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="xSpawnTB2"/>
   <property name="NAME" value="SpawnTB2"/>
  </properties>
 </tile>
 <tile id="20" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="TB3"/>
   <property name="NAME" value="UnhideTB3"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="21" type="MeLayerState">
  <properties>
   <property name="HIDE" type="bool" value="true"/>
   <property name="LAYER_NAME" value="TB3"/>
   <property name="NAME" value="HideTB3"/>
  </properties>
 </tile>
 <tile id="24" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB3"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB3"/>
   <property name="4" value="RemoveTrigger"/>
   <property name="NAME" value="xSpawnTB3"/>
  </properties>
 </tile>
 <tile id="25" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="xSpawnTB3"/>
   <property name="NAME" value="SpawnTB3"/>
  </properties>
 </tile>
 <tile id="30" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="TB4"/>
   <property name="NAME" value="UnhideTB4"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="31" type="MeLayerState">
  <properties>
   <property name="HIDE" type="bool" value="true"/>
   <property name="LAYER_NAME" value="TB4"/>
   <property name="NAME" value="HideTB4"/>
  </properties>
 </tile>
 <tile id="34" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB4"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB4"/>
   <property name="4" value="RemoveTrigger"/>
   <property name="NAME" value="xSpawnTB4"/>
  </properties>
 </tile>
 <tile id="35" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="xSpawnTB4"/>
   <property name="NAME" value="SpawnTB4"/>
  </properties>
 </tile>
 <tile id="39" type="AeWait">
  <properties>
   <property name="NAME" value="WaitShort"/>
   <property name="TIME" type="float" value="5"/>
  </properties>
 </tile>
 <tile id="40" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="TB5"/>
   <property name="NAME" value="UnhideTB5"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="41" type="MeLayerState">
  <properties>
   <property name="HIDE" type="bool" value="true"/>
   <property name="LAYER_NAME" value="TB5"/>
   <property name="NAME" value="HideTB5"/>
  </properties>
 </tile>
 <tile id="44" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB5"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB5"/>
   <property name="4" value="RemoveTrigger"/>
   <property name="NAME" value="xSpawnTB5"/>
  </properties>
 </tile>
 <tile id="45" type="AteSingle">
  <properties>
   <property name="EVENT_NAME" value="xSpawnTB5"/>
   <property name="NAME" value="SpawnTB5"/>
  </properties>
 </tile>
 <tile id="50" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadMap2"/>
   <property name="PATH" type="file" value="map2.tmx"/>
  </properties>
 </tile>
 <tile id="51" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadMap3"/>
   <property name="PATH" type="file" value="map3.tmx"/>
  </properties>
 </tile>
 <tile id="52" type="GeChangeMap">
  <properties>
   <property name="NAME" value="LoadEnding"/>
   <property name="PATH" type="file" value="end_screen.tmx"/>
  </properties>
 </tile>
 <tile id="56" type="AeWait">
  <properties>
   <property name="NAME" value="WaitShort"/>
   <property name="TIME" type="float" value="7.5"/>
  </properties>
 </tile>
 <tile id="57" type="GeQuit">
  <properties>
   <property name="NAME" value="QuitAfterEnd"/>
  </properties>
 </tile>
 <tile id="58" type="AeMulti">
  <properties>
   <property name="1" value="HideTB3"/>
   <property name="2" value="UnhideTB4"/>
   <property name="3" value="KeepTBVisible"/>
   <property name="4" value="HideTB4"/>
   <property name="5" value="UnhideTB5"/>
   <property name="6" value="KeepTBVisible"/>
   <property name="7" value="WaitShort"/>
   <property name="8" value="QuitAfterEnd"/>
   <property name="NAME" value="EndScript2"/>
  </properties>
 </tile>
 <tile id="60" type="MePlayMusic">
  <properties>
   <property name="NAME" value="EndMusic"/>
   <property name="PATH" type="file" value="../audio/finalSong.ogg"/>
  </properties>
 </tile>
 <tile id="61" type="AeMulti">
  <properties>
   <property name="1" value="UnhideTB1"/>
   <property name="2" value="KeepTBVisible"/>
   <property name="3" value="HideTB1"/>
   <property name="4" value="UnhideTB2"/>
   <property name="5" value="KeepTBVisible"/>
   <property name="6" value="HideTB2"/>
   <property name="7" value="UnhideTB3"/>
   <property name="8" value="KeepTBVisible"/>
   <property name="9" value="EndScript2"/>
   <property name="NAME" value="EndScript"/>
  </properties>
 </tile>
</tileset>
