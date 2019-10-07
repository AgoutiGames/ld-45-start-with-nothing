<?xml version="1.0" encoding="UTF-8"?>
<tileset name="MonsterEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../../tilesets/symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="LEFT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="MonsterAnimateLeft"/>
  </properties>
 </tile>
 <tile id="1" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="MonsterAnimateRight"/>
  </properties>
 </tile>
 <tile id="2" type="AteMath">
  <properties>
   <property name="==" type="bool" value="false"/>
   <property name="&gt;" type="bool" value="true"/>
   <property name="NAME" value="MonsterTestDir"/>
   <property name="VAL1" value="*__XSPEED"/>
   <property name="VAL2" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="3" type="AteSwitch">
  <properties>
   <property name="1" value="MonsterTestDir"/>
   <property name="FAILURE" value="MonsterAnimateLeft"/>
   <property name="NAME" value="MonsterAnimate"/>
   <property name="SUCCESS" value="MonsterAnimateRight"/>
  </properties>
 </tile>
 <tile id="10" type="AeSetVar">
  <properties>
   <property name="NAME" value="SetUpMonsterHp"/>
   <property name="VALUE" type="int" value="5"/>
   <property name="VAL_NAME" value="MONSTER_HP"/>
  </properties>
 </tile>
 <tile id="19" type="AeEraseThis">
  <properties>
   <property name="NAME" value="MonsterVanish"/>
  </properties>
 </tile>
 <tile id="20" type="AteCollision">
  <properties>
   <property name="NAME" value="CheckIfHurt"/>
   <property name="OTHER_HITBOX" value="Hurt"/>
  </properties>
 </tile>
 <tile id="21" type="AteMath">
  <properties>
   <property name="&lt;" type="bool" value="true"/>
   <property name="NAME" value="CheckIfDead"/>
   <property name="VAL1" value="*MONSTER_HP"/>
   <property name="VAL2" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="22" type="AeSetVar">
  <properties>
   <property name="+=" type="bool" value="true"/>
   <property name="NAME" value="DecreaseMonsterHp"/>
   <property name="VALUE" type="int" value="-1"/>
   <property name="VAL_NAME" value="MONSTER_HP"/>
  </properties>
 </tile>
 <tile id="23" type="AeSound">
  <properties>
   <property name="NAME" value="MonsterHitSound"/>
   <property name="PATH" type="file" value="../../audio/monsterHit.ogg"/>
  </properties>
 </tile>
 <tile id="24" type="AeSound">
  <properties>
   <property name="NAME" value="MonsterDeathSound"/>
   <property name="PATH" type="file" value="../../audio/monsterDeath.ogg"/>
  </properties>
 </tile>
 <tile id="25" type="AeMulti">
  <properties>
   <property name="1" value="MonsterDeathSound"/>
   <property name="2" value="MonsterVanish"/>
   <property name="NAME" value="MonsterDeath"/>
  </properties>
 </tile>
 <tile id="26" type="AteSwitch">
  <properties>
   <property name="1" value="CheckIfDead"/>
   <property name="FAILURE" value="MonsterHitSound"/>
   <property name="NAME" value="CondMonsterDeath"/>
   <property name="SUCCESS" value="MonsterDeath"/>
  </properties>
 </tile>
 <tile id="27" type="AeMulti">
  <properties>
   <property name="1" value="DecreaseMonsterHp"/>
   <property name="2" value="CondMonsterDeath"/>
   <property name="NAME" value="MonsterHit"/>
  </properties>
 </tile>
 <tile id="28" type="AteSwitch">
  <properties>
   <property name="1" value="CheckIfHurt"/>
   <property name="NAME" value="MonsterCondHurt"/>
   <property name="SUCCESS" value="MonsterHit"/>
  </properties>
 </tile>
 <tile id="30" type="AteCollision">
  <properties>
   <property name="NAME" value="HitLeftBorder"/>
   <property name="OTHER_HITBOX" value="LeftBorder"/>
  </properties>
 </tile>
 <tile id="31" type="AteCollision">
  <properties>
   <property name="NAME" value="HitRightBorder"/>
   <property name="OTHER_HITBOX" value="RightBorder"/>
  </properties>
 </tile>
 <tile id="33" type="AeSetVar">
  <properties>
   <property name="NAME" value="MonsterMoveLeft"/>
   <property name="VALUE" type="float" value="-300"/>
   <property name="VAL_NAME" value="__XSPEED"/>
  </properties>
 </tile>
 <tile id="34" type="AeSetVar">
  <properties>
   <property name="NAME" value="MonsterMoveRight"/>
   <property name="VALUE" type="float" value="300"/>
   <property name="VAL_NAME" value="__XSPEED"/>
  </properties>
 </tile>
 <tile id="35" type="AteSwitch">
  <properties>
   <property name="1" value="HitLeftBorder"/>
   <property name="NAME" value="MonstCondMovRight"/>
   <property name="SUCCESS" value="MonsterMoveRight"/>
  </properties>
 </tile>
 <tile id="36" type="AteSwitch">
  <properties>
   <property name="1" value="HitRightBorder"/>
   <property name="NAME" value="MonstCondMovLeft"/>
   <property name="SUCCESS" value="MonsterMoveLeft"/>
  </properties>
 </tile>
 <tile id="37" type="AeMove">
  <properties>
   <property name="NAME" value="MonsterMove"/>
  </properties>
 </tile>
 <tile id="38" type="AeMulti">
  <properties>
   <property name="1" value="MonsterAnimate"/>
   <property name="2" value="MonsterMove"/>
   <property name="NAME" value="MonsterPhysics"/>
  </properties>
 </tile>
 <tile id="40" type="AeMulti">
  <properties>
   <property name="1" value="SetUpMonsterHp"/>
   <property name="2" value="MonsterMoveLeft"/>
   <property name="NAME" value="SetupMonster"/>
  </properties>
 </tile>
 <tile id="44" type="AeMulti">
  <properties>
   <property name="1" value="MonsterCondHurt"/>
   <property name="2" value="MonstCondMovLeft"/>
   <property name="3" value="MonstCondMovRight"/>
   <property name="NAME" value="MonsterCollision"/>
  </properties>
 </tile>
</tileset>
