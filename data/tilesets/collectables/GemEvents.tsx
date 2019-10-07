<?xml version="1.0" encoding="UTF-8"?>
<tileset name="GemEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="MeSetVar">
  <properties>
   <property name="NAME" value="ResetGem1"/>
   <property name="VALUE" type="bool" value="false"/>
   <property name="VAL_NAME" value="GEM1"/>
  </properties>
 </tile>
 <tile id="1" type="MeSetVar">
  <properties>
   <property name="NAME" value="ResetGem2"/>
   <property name="VALUE" type="bool" value="false"/>
   <property name="VAL_NAME" value="GEM2"/>
  </properties>
 </tile>
 <tile id="2" type="MeSetVar">
  <properties>
   <property name="NAME" value="ResetGem3"/>
   <property name="VALUE" type="bool" value="false"/>
   <property name="VAL_NAME" value="GEM3"/>
  </properties>
 </tile>
 <tile id="4" type="AeEraseThis">
  <properties>
   <property name="NAME" value="VanishGem"/>
  </properties>
 </tile>
 <tile id="5" type="AeSound">
  <properties>
   <property name="NAME" value="GemSound"/>
   <property name="PATH" type="file" value="../../audio/powerUp.ogg"/>
  </properties>
 </tile>
 <tile id="10" type="MeSetVar">
  <properties>
   <property name="NAME" value="EnableGem1"/>
   <property name="VALUE" type="bool" value="true"/>
   <property name="VAL_NAME" value="GEM1"/>
  </properties>
 </tile>
 <tile id="11" type="MeSetVar">
  <properties>
   <property name="NAME" value="EnableGem2"/>
   <property name="VALUE" type="bool" value="true"/>
   <property name="VAL_NAME" value="GEM2"/>
  </properties>
 </tile>
 <tile id="12" type="MeSetVar">
  <properties>
   <property name="NAME" value="EnableGem3"/>
   <property name="VALUE" type="bool" value="true"/>
   <property name="VAL_NAME" value="GEM3"/>
  </properties>
 </tile>
 <tile id="13" type="AteCollision">
  <properties>
   <property name="NAME" value="PickedUp"/>
   <property name="OTHER_NAME" value="PLAYER"/>
  </properties>
 </tile>
 <tile id="14" type="AeMulti">
  <properties>
   <property name="1" value="GemSound"/>
   <property name="2" value="EnableGem1"/>
   <property name="3" value="VanishGem"/>
   <property name="NAME" value="PickGem1"/>
  </properties>
 </tile>
 <tile id="15" type="AeMulti">
  <properties>
   <property name="1" value="GemSound"/>
   <property name="2" value="EnableGem2"/>
   <property name="3" value="VanishGem"/>
   <property name="NAME" value="PickGem2"/>
  </properties>
 </tile>
 <tile id="16" type="AeMulti">
  <properties>
   <property name="1" value="GemSound"/>
   <property name="2" value="EnableGem3"/>
   <property name="3" value="VanishGem"/>
   <property name="NAME" value="PickGem3"/>
  </properties>
 </tile>
 <tile id="17" type="AteSwitch">
  <properties>
   <property name="1" value="PickedUp"/>
   <property name="NAME" value="Gem1Coll"/>
   <property name="SUCCESS" value="PickGem1"/>
  </properties>
 </tile>
 <tile id="18" type="AteSwitch">
  <properties>
   <property name="1" value="PickedUp"/>
   <property name="NAME" value="Gem2Coll"/>
   <property name="SUCCESS" value="PickGem2"/>
  </properties>
 </tile>
 <tile id="19" type="AteSwitch">
  <properties>
   <property name="1" value="PickedUp"/>
   <property name="NAME" value="Gem3Coll"/>
   <property name="SUCCESS" value="PickGem3"/>
  </properties>
 </tile>
 <tile id="20" type="MePlayMusic">
  <properties>
   <property name="NAME" value="Map1Music"/>
   <property name="PATH" type="file" value="../../audio/LD45.ogg"/>
  </properties>
 </tile>
</tileset>
