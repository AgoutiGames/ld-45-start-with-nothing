<?xml version="1.0" encoding="UTF-8"?>
<tileset name="PlayerEvents" tilewidth="60" tileheight="60" tilecount="100" columns="10">
 <image source="../../tilesets/symbol_numbers.png" width="600" height="600"/>
 <tile id="0" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="GameOverScreen"/>
   <property name="NAME" value="GO1"/>
   <property name="UNHIDE" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="1" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="GameOverButtons"/>
   <property name="NAME" value="GO2"/>
   <property name="UNHIDE" type="bool" value="true"/>
   <property name="UNSUSPEND" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="2" type="MeLayerState">
  <properties>
   <property name="LAYER_NAME" value="MainActors"/>
   <property name="NAME" value="GO3"/>
   <property name="SUSPEND" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="3" type="AeMulti">
  <properties>
   <property name="1" value="GO1"/>
   <property name="2" value="GO2"/>
   <property name="3" value="GO3"/>
   <property name="NAME" value="ShowGameOver"/>
  </properties>
 </tile>
 <tile id="4" type="AeEraseThis">
  <properties>
   <property name="NAME" value="PlayerVanish"/>
  </properties>
 </tile>
 <tile id="10" type="MeSetVar">
  <properties>
   <property name="NAME" value="LookRight"/>
   <property name="VALUE" type="bool" value="true"/>
   <property name="VAL_NAME" value="LOOK_RIGHT"/>
  </properties>
 </tile>
 <tile id="11" type="MeSetVar">
  <properties>
   <property name="NAME" value="LookLeft"/>
   <property name="VALUE" type="bool" value="false"/>
   <property name="VAL_NAME" value="LOOK_RIGHT"/>
  </properties>
 </tile>
 <tile id="12" type="AteMath">
  <properties>
   <property name="&lt;" type="bool" value="true"/>
   <property name="==" type="bool" value="false"/>
   <property name="&gt;" type="bool" value="false"/>
   <property name="NAME" value="CheckLookLeft"/>
   <property name="VAL1" value="*__XSPEED"/>
   <property name="VAL2" type="float" value="-20"/>
  </properties>
 </tile>
 <tile id="13" type="AeWait">
  <properties>
   <property name="NAME" value="WaitDeath"/>
   <property name="TIME" type="float" value="3"/>
  </properties>
 </tile>
 <tile id="14" type="AteMath">
  <properties>
   <property name="==" type="bool" value="false"/>
   <property name="&gt;" type="bool" value="true"/>
   <property name="NAME" value="CheckLookRight"/>
   <property name="VAL1" value="*__XSPEED"/>
   <property name="VAL2" type="float" value="20"/>
  </properties>
 </tile>
 <tile id="15" type="AteSwitch">
  <properties>
   <property name="1" value="CheckLookLeft"/>
   <property name="NAME" value="CondLookLeft"/>
   <property name="SUCCESS" value="LookLeft"/>
  </properties>
 </tile>
 <tile id="16" type="AteSwitch">
  <properties>
   <property name="1" value="CheckLookRight"/>
   <property name="NAME" value="CondLookRight"/>
   <property name="SUCCESS" value="LookRight"/>
  </properties>
 </tile>
 <tile id="17" type="AeMulti">
  <properties>
   <property name="1" value="CondLookLeft"/>
   <property name="2" value="CondLookRight"/>
   <property name="NAME" value="CondLook"/>
  </properties>
 </tile>
 <tile id="18" type="AeSound">
  <properties>
   <property name="NAME" value="DeathSound"/>
   <property name="PATH" type="file" value="../../audio/deathSound.ogg"/>
  </properties>
 </tile>
 <tile id="20" type="AteCollision">
  <properties>
   <property name="NAME" value="CollideDeadly"/>
   <property name="OTHER_HITBOX" value="Deadly"/>
  </properties>
 </tile>
 <tile id="21" type="AeAnimate">
  <properties>
   <property name="ANIMATION_FRAMES" type="int" value="29"/>
   <property name="ANIMATION_TYPE" value="DIE"/>
   <property name="NAME" value="DieAnim"/>
   <property name="SIGNAL" value="STOP"/>
   <property name="SPEED" type="float" value="1.5"/>
   <property name="STOP_ON_LAST_FRAME" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="22" type="GeChangeMap">
  <properties>
   <property name="NAME" value="RestartMap"/>
   <property name="PATH" type="file" value="../../maps/map1.tmx"/>
  </properties>
 </tile>
 <tile id="23" type="AeMulti">
  <properties>
   <property name="1" value="DeathSound"/>
   <property name="2" value="DieAnim"/>
   <property name="3" value="WaitDeath"/>
   <property name="4" value="ShowGameOver"/>
   <property name="NAME" value="DieEvent"/>
   <property name="PRIORITY" value="HIGH"/>
  </properties>
 </tile>
 <tile id="24" type="AteSwitch">
  <properties>
   <property name="1" value="CollideDeadly"/>
   <property name="NAME" value="CondDeath"/>
   <property name="SUCCESS" value="DieEvent"/>
  </properties>
 </tile>
 <tile id="30" type="AeSetVar">
  <properties>
   <property name="NAME" value="ReadSpeed"/>
   <property name="VALUE" value="*__XSPEED"/>
   <property name="VAL_NAME" value="REL_SPEED"/>
  </properties>
 </tile>
 <tile id="31" type="AeSetVar">
  <properties>
   <property name="*=" type="bool" value="true"/>
   <property name="NAME" value="MultiplySpeed"/>
   <property name="VALUE" type="float" value="0.003"/>
   <property name="VAL_NAME" value="REL_SPEED"/>
  </properties>
 </tile>
 <tile id="32" type="AeSetVar">
  <properties>
   <property name="NAME" value="ReadRevSpeed"/>
   <property name="VALUE" value="*REL_SPEED"/>
   <property name="VAL_NAME" value="REV_REL_SPEED"/>
  </properties>
 </tile>
 <tile id="33" type="AeSetVar">
  <properties>
   <property name="*=" type="bool" value="true"/>
   <property name="NAME" value="MultiplyRevSpeed"/>
   <property name="VALUE" type="float" value="-1"/>
   <property name="VAL_NAME" value="REV_REL_SPEED"/>
  </properties>
 </tile>
 <tile id="34" type="AeMulti">
  <properties>
   <property name="1" value="ReadSpeed"/>
   <property name="2" value="MultiplySpeed"/>
   <property name="3" value="ReadRevSpeed"/>
   <property name="4" value="MultiplyRevSpeed"/>
   <property name="NAME" value="CalcSpeed"/>
  </properties>
 </tile>
 <tile id="35" type="AeAccelerate">
  <properties>
   <property name="NAME" value="AccUp"/>
   <property name="XFACTOR" type="float" value="0"/>
   <property name="YFACTOR" type="float" value="-999999"/>
   <property name="YMAX_SPEED" type="float" value="-1150"/>
  </properties>
 </tile>
 <tile id="36" type="AteSwitch">
  <properties>
   <property name="1" value="OnGroundLenient"/>
   <property name="NAME" value="Jump"/>
   <property name="SUCCESS" value="AccUp"/>
  </properties>
 </tile>
 <tile id="40" type="AeAccelerate">
  <properties>
   <property name="NAME" value="AccRightGround"/>
   <property name="XFACTOR" type="float" value="1750"/>
   <property name="XMAX_SPEED" type="float" value="850"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="41" type="AeAccelerate">
  <properties>
   <property name="NAME" value="AccLeftGround"/>
   <property name="XFACTOR" type="float" value="-1750"/>
   <property name="XMAX_SPEED" type="float" value="-850"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="42" type="AeMove">
  <properties>
   <property name="NAME" value="Move"/>
  </properties>
 </tile>
 <tile id="43" type="AeAccelerate">
  <properties>
   <property name="NAME" value="Gravity"/>
   <property name="XFACTOR" type="float" value="0"/>
   <property name="YFACTOR" type="float" value="2000"/>
   <property name="YMAX_SPEED" type="float" value="2000"/>
  </properties>
 </tile>
 <tile id="44" type="AeDecelerate">
  <properties>
   <property name="NAME" value="DampenGround"/>
   <property name="XFACTOR" type="float" value="1000"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="45" type="AeDecelerate">
  <properties>
   <property name="NAME" value="DampenAir"/>
   <property name="XFACTOR" type="float" value="100"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="46" type="AteOnGround">
  <properties>
   <property name="NAME" value="OnGroundStrict"/>
  </properties>
 </tile>
 <tile id="47" type="AteOnGround">
  <properties>
   <property name="NAME" value="OnGroundLenient"/>
   <property name="TOLERANCE" type="int" value="8"/>
  </properties>
 </tile>
 <tile id="48" type="AteSwitch">
  <properties>
   <property name="1" value="OnGroundStrict"/>
   <property name="FAILURE" value="DampenAir"/>
   <property name="NAME" value="Dampen"/>
   <property name="SUCCESS" value="DampenGround"/>
  </properties>
 </tile>
 <tile id="50" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="RIGHT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="AnimWalkRight"/>
   <property name="SPEED" value="*REL_SPEED"/>
  </properties>
 </tile>
 <tile id="51" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="WALK"/>
   <property name="DIRECTION" value="LEFT"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="AnimWalkLeft"/>
   <property name="SPEED" value="*REV_REL_SPEED"/>
  </properties>
 </tile>
 <tile id="52" type="AeAccelerate">
  <properties>
   <property name="NAME" value="AccRightAir"/>
   <property name="XFACTOR" type="float" value="300"/>
   <property name="XMAX_SPEED" type="float" value="850"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="53" type="AeAccelerate">
  <properties>
   <property name="NAME" value="AccLeftAir"/>
   <property name="XFACTOR" type="float" value="-300"/>
   <property name="XMAX_SPEED" type="float" value="-850"/>
   <property name="YFACTOR" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="54" type="AteSwitch">
  <properties>
   <property name="1" value="OnGroundStrict"/>
   <property name="FAILURE" value="AccLeftAir"/>
   <property name="NAME" value="CondAccLeft"/>
   <property name="SUCCESS" value="AccLeftGround"/>
  </properties>
 </tile>
 <tile id="55" type="AteSwitch">
  <properties>
   <property name="1" value="OnGroundStrict"/>
   <property name="FAILURE" value="AccRightAir"/>
   <property name="NAME" value="CondAccRight"/>
   <property name="SUCCESS" value="AccRightGround"/>
  </properties>
 </tile>
 <tile id="56" type="AeMulti">
  <properties>
   <property name="NAME" value="MoveLeft"/>
  </properties>
 </tile>
 <tile id="60" type="AteMath">
  <properties>
   <property name="&lt;" type="bool" value="true"/>
   <property name="==" type="bool" value="false"/>
   <property name="NAME" value="CheckMoveLeft"/>
   <property name="VAL1" value="*REL_SPEED"/>
   <property name="VAL2" type="float" value="-0.2"/>
  </properties>
 </tile>
 <tile id="61" type="AteMath">
  <properties>
   <property name="==" type="bool" value="false"/>
   <property name="&gt;" type="bool" value="true"/>
   <property name="NAME" value="CheckMoveRight"/>
   <property name="VAL1" value="*REL_SPEED"/>
   <property name="VAL2" type="float" value="0.2"/>
  </properties>
 </tile>
 <tile id="62" type="AeAnimate">
  <properties>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="AnimIdle"/>
  </properties>
 </tile>
 <tile id="63" type="AteSwitch">
  <properties>
   <property name="1" value="CheckMoveRight"/>
   <property name="2" value="CheckMoveLeft"/>
   <property name="AND" type="bool" value="false"/>
   <property name="FAILURE" value="AnimIdle"/>
   <property name="NAME" value="CondIdle"/>
   <property name="OR" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="64" type="AteSwitch">
  <properties>
   <property name="1" value="CheckMoveRight"/>
   <property name="NAME" value="CondAnimWalkRight"/>
   <property name="SUCCESS" value="AnimWalkRight"/>
  </properties>
 </tile>
 <tile id="65" type="AteSwitch">
  <properties>
   <property name="1" value="CheckMoveLeft"/>
   <property name="NAME" value="CondAnimWalkLeft"/>
   <property name="SUCCESS" value="AnimWalkLeft"/>
  </properties>
 </tile>
 <tile id="66" type="AeMulti">
  <properties>
   <property name="1" value="CondIdle"/>
   <property name="2" value="CondAnimWalkLeft"/>
   <property name="3" value="CondAnimWalkRight"/>
   <property name="NAME" value="CondGroundAnim"/>
  </properties>
 </tile>
 <tile id="70" type="AteMath">
  <properties>
   <property name="&lt;" type="bool" value="true"/>
   <property name="==" type="bool" value="false"/>
   <property name="NAME" value="CheckMoveUp"/>
   <property name="VAL1" value="*__YSPEED"/>
   <property name="VAL2" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="71" type="AteMath">
  <properties>
   <property name="==" type="bool" value="false"/>
   <property name="&gt;" type="bool" value="true"/>
   <property name="NAME" value="CheckMoveDown"/>
   <property name="VAL1" value="*__YSPEED"/>
   <property name="VAL2" type="float" value="0"/>
  </properties>
 </tile>
 <tile id="72" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="JUMP"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="AnimJump"/>
   <property name="SPEED" type="float" value="3"/>
   <property name="STOP_ON_LAST_FRAME" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="73" type="AeAnimate">
  <properties>
   <property name="ANIMATION_TYPE" value="FALL"/>
   <property name="GAME_FRAMES" type="int" value="1"/>
   <property name="NAME" value="AnimFall"/>
   <property name="SPEED" type="float" value="1"/>
   <property name="STOP_ON_LAST_FRAME" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="74" type="AteSwitch">
  <properties>
   <property name="1" value="CheckMoveDown"/>
   <property name="NAME" value="CondFallAnim"/>
   <property name="SUCCESS" value="AnimFall"/>
  </properties>
 </tile>
 <tile id="75" type="AteSwitch">
  <properties>
   <property name="1" value="CheckMoveUp"/>
   <property name="NAME" value="CondJumpAnim"/>
   <property name="SUCCESS" value="AnimJump"/>
  </properties>
 </tile>
 <tile id="76" type="AeMulti">
  <properties>
   <property name="1" value="CondJumpAnim"/>
   <property name="2" value="CondFallAnim"/>
   <property name="NAME" value="CondAirAnim"/>
  </properties>
 </tile>
 <tile id="77" type="AteSwitch">
  <properties>
   <property name="1" value="OnGroundStrict"/>
   <property name="FAILURE" value="CondAirAnim"/>
   <property name="NAME" value="CondCompleteAnim"/>
   <property name="SUCCESS" value="CondGroundAnim"/>
  </properties>
 </tile>
 <tile id="89" type="AeMulti">
  <properties>
   <property name="1" value="Gravity"/>
   <property name="2" value="Dampen"/>
   <property name="3" value="Move"/>
   <property name="4" value="CalcSpeed"/>
   <property name="5" value="CondCompleteAnim"/>
   <property name="6" value="CondLook"/>
   <property name="NAME" value="Physics"/>
  </properties>
 </tile>
 <tile id="90" type="AeSpawnActor">
  <properties>
   <property name="ACTOR_NAME" value="SingleShot1"/>
   <property name="LAYER_NAME" value="MainActors"/>
   <property name="NAME" value="Shot1"/>
   <property name="SPAWN_NAME" value="Shot"/>
   <property name="X_POS" type="int" value="65"/>
   <property name="Y_POS" type="int" value="-110"/>
  </properties>
 </tile>
 <tile id="91" type="AeSpawnActor">
  <properties>
   <property name="ACTOR_NAME" value="ArcShot1"/>
   <property name="LAYER_NAME" value="MainActors"/>
   <property name="NAME" value="Shot2"/>
   <property name="SPAWN_NAME" value="Shot"/>
   <property name="X_POS" type="int" value="65"/>
   <property name="Y_POS" type="int" value="-110"/>
  </properties>
 </tile>
 <tile id="92" type="AteMath">
  <properties>
   <property name="NAME" value="Gem1Found"/>
   <property name="VAL1" value="*GEM1"/>
   <property name="VAL2" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="93" type="AteMath">
  <properties>
   <property name="NAME" value="Gem2Found"/>
   <property name="VAL1" value="*GEM2"/>
   <property name="VAL2" type="bool" value="true"/>
  </properties>
 </tile>
 <tile id="94" type="AteSwitch">
  <properties>
   <property name="1" value="Gem1Found"/>
   <property name="NAME" value="CondShot1"/>
   <property name="SUCCESS" value="Shot1"/>
  </properties>
 </tile>
 <tile id="95" type="AteSwitch">
  <properties>
   <property name="1" value="Gem2Found"/>
   <property name="NAME" value="CondShot2"/>
   <property name="SUCCESS" value="Shot2"/>
  </properties>
 </tile>
 <tile id="99" type="GeChangeMap">
  <properties>
   <property name="NAME" value="QuitGamePlayer"/>
   <property name="PATH" type="file" value="../../maps/title_screen.tmx"/>
  </properties>
 </tile>
</tileset>
