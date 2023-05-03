import React, { useEffect } from "react";
import { StyleSheet, ScrollView, SafeAreaView, FlatList, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from "./MainScreen";
import Card from "./Card";
import data from "./data";
import { HTML } from 'react-native-render-html';
import HiloPests from "./screens/Id101";
import HiloDiseases from "./screens/Id102";
import LandscapePests from "./screens/Id103";
import LandscapeDiseases from "./screens/Id104";
import PesticidesList from "./screens/Id105";
import LiteratureList from "./screens/Id106";
import About from "./screens/Id107";
import Ildiz from "./pages/Id108";
import Soruvchi from "./pages/Id109";
import Bargxor from "./pages/Id110";
import Tana from "./pages/Id111";
import Urug from "./pages/Id112";
import IPL from "./pages/IPL";
import Ildiz_manzarali from "./pages_manzarali/Id113";
import Bargxor_manzarali from "./pages_manzarali/Id114";
import Tana_manzarali from "./pages_manzarali/Id115";
import Urug_manzarali from "./pages_manzarali/Id116";
import Ormon from "./pages_manzarali/Ormon";
import Kasalliklarga from "./pages_manzarali/Kasalliklarga";
import MPL from "./pages_manzarali/MPL";

import Id1 from './html/Id1.js';
import Id2 from './html/Id2.js';
import Id3 from './html/Id3.js';
import Id4 from './html/Id4.js';
import Id5 from './html/Id5.js';
import Id6 from './html/Id6.js';
import Id7 from './html/Id7.js';
import Id8 from './html/Id8.js';
import Id9 from './html/Id9.js';
import Id10 from './html/Id10.js';
import Id11 from './html/Id11.js';
import Id12 from './html/Id12.js';
import Id13 from './html/Id13.js';
import Id14 from './html/Id14.js';
import Id15 from './html/Id15.js';
import Id16 from './html/Id16.js';
import Id17 from './html/Id17.js';
import Id18 from './html/Id18.js';
import Id19 from './html/Id19.js';
import Id20 from './html/Id20.js';
import Id21 from './html/Id21.js';
import Id22 from './html/Id22.js';
import Id23 from './html/Id23.js';
import Id24 from './html/Id24.js';
import Id25 from './html/Id25.js';
import Id26 from './html/Id26.js';
import Id27 from './html/Id27.js';
import Id28 from './html/Id28.js';
import Id29 from './html/Id29.js';
import Id30 from './html/Id30.js';
import Id31 from './html/Id31.js';
import Id32 from './html/Id32.js';
import Id33 from './html/Id33.js';
import Id34 from './html/Id34.js';
import Id35 from './html/Id35.js';
import Id36 from './html/Id36.js';
import Id37 from './html/Id37.js';
import Id38 from './html/Id38.js';
import Id39 from './html/Id39.js';
import Id40 from './html/Id40.js';
import Id41 from './html/Id41.js';
import Id42 from './html/Id42.js';
import Id43 from './html/Id43.js';
import Id44 from './html/Id44.js';
import Id45 from './html/Id45.js';
import Id46 from './html/Id46.js';
import Id47 from './html/Id47.js';
import Id48 from './html/Id48.js';
import Id49 from './html/Id49.js';
import Id50 from './html/Id50.js';
import Id51 from './html/Id51.js';
import Id52 from './html/Id52.js';
import Id53 from './html/Id53.js';
import Id54 from './html/Id54.js';
import Id55 from './html/Id55.js';
import Id56 from './html/Id56.js';
import Id57 from './html/Id57.js';
import Id58 from './html/Id58.js';
import Id59 from './html/Id59.js';
import Id60 from './html/Id60.js';
import Id61 from './html/Id61.js';
import Id62 from './html/Id62.js';
import Id63 from './html/Id63.js';
import Id64 from './html/Id64.js';
import Id65 from './html/Id65.js';
import Id66 from './html/Id66.js';
import Id67 from './html/Id67.js';
import Id68 from './html/Id68.js';
import Id69 from './html/Id69.js';
import Id70 from './html/Id70.js';
import Id71 from './html/Id71.js';
import Id72 from './html/Id72.js';
import Id73 from './html/Id73.js';
import Id74 from './html/Id74.js';
import Id75 from './html/Id75.js';
import Id76 from './html/Id76.js';
import Id77 from './html/Id77.js';
import Id78 from './html/Id78.js';
import Id79 from './html/Id79.js';
import Id80 from './html/Id80.js';

const Stack = createStackNavigator();
export default function App() {
  return (
  
    <NavigationContainer safeAreaInsets={{ top: 0 }} style={styles.navigator}>
      <Stack.Navigator
   screenOptions={{
    headerStyle: {
      backgroundColor: '#fff',
  
    },
    headerTitleStyle: {
      fontSize: 18,
      color: '#000',
    },
    
    headerTintColor: '#000',
    headerTitleAlign: 'center',
    headerTitleContainerStyle: {
      maxWidth: '70%',  // set the maximum width for the title
    },
  }
  
}
    
  >

        <Stack.Screen name="Ormon Himoyasi" component={MainScreen} />
        <Stack.Screen name="HiloPests" component={HiloPests} />
        <Stack.Screen name="HiloDiseases" component={HiloDiseases} />
        <Stack.Screen name="LandscapePests" component={LandscapePests} />
        <Stack.Screen name="LandscapeDiseases" component={LandscapeDiseases} />
        <Stack.Screen name="PesticidesList" component={PesticidesList} />
        <Stack.Screen name="LiteratureList" component={LiteratureList} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Ildiz" component={Ildiz} />
        <Stack.Screen name="Soruvchi" component={Soruvchi} />
        <Stack.Screen name="Bargxor" component={Bargxor} />
        <Stack.Screen name="Tana" component={Tana} />
        <Stack.Screen name="Urug" component={Urug} />
        <Stack.Screen name="Ildiz_manzarali" component={Ildiz_manzarali} />
        <Stack.Screen name="Bargxor_manzarali" component={Bargxor_manzarali} />
        <Stack.Screen name="Tana_manzarali" component={Tana_manzarali} />
        <Stack.Screen name="Urug_manzarali" component={Urug_manzarali} />
        <Stack.Screen name="Ormon" component={Ormon} />
        <Stack.Screen name="Kasalliklarga" component={Kasalliklarga} />
        <Stack.Screen name="MPL" component={MPL} />
        <Stack.Screen name="IPL" component={IPL} />  
        <Stack.Screen key="Id1" name="Id1" component={Id1} options={{ title: "" }} />
        <Stack.Screen key="Id2" name="Id2" component={Id2} options={{ title: "" }} />
        <Stack.Screen key="Id3" name="Id3" component={Id3} options={{ title: "" }} />
        <Stack.Screen key="Id4" name="Id4" component={Id4} options={{ title: "" }} />
        <Stack.Screen key="Id5" name="Id5" component={Id5} options={{ title: "" }} />
        <Stack.Screen key="Id6" name="Id6" component={Id6} options={{ title: "" }} />
        <Stack.Screen key="Id7" name="Id7" component={Id7} options={{ title: "" }} />
        <Stack.Screen key="Id8" name="Id8" component={Id8} options={{ title: "" }} />
        <Stack.Screen key="Id9" name="Id9" component={Id9} options={{ title: "" }} />
        <Stack.Screen key="Id10" name="Id10" component={Id10} options={{ title: "" }} />
        <Stack.Screen key="Id11" name="Id11" component={Id11} options={{ title: "" }} />
        <Stack.Screen key="Id12" name="Id12" component={Id12} options={{ title: "" }} />
        <Stack.Screen key="Id13" name="Id13" component={Id13} options={{ title: "" }} />
        <Stack.Screen key="Id14" name="Id14" component={Id14} options={{ title: "" }} />
        <Stack.Screen key="Id15" name="Id15" component={Id15} options={{ title: "" }} />
        <Stack.Screen key="Id16" name="Id16" component={Id16} options={{ title: "" }} />
        <Stack.Screen key="Id17" name="Id17" component={Id17} options={{ title: "" }} />
        <Stack.Screen key="Id18" name="Id18" component={Id18} options={{ title: "" }} />
        <Stack.Screen key="Id19" name="Id19" component={Id19} options={{ title: "" }} />
        <Stack.Screen key="Id20" name="Id20" component={Id20} options={{ title: "" }} />
        <Stack.Screen key="Id21" name="Id21" component={Id21} options={{ title: "" }} />
        <Stack.Screen key="Id22" name="Id22" component={Id22} options={{ title: "" }} />
        <Stack.Screen key="Id23" name="Id23" component={Id23} options={{ title: "" }} />
        <Stack.Screen key="Id24" name="Id24" component={Id24} options={{ title: "" }} />
        <Stack.Screen key="Id25" name="Id25" component={Id25} options={{ title: "" }} />
        <Stack.Screen key="Id26" name="Id26" component={Id26} options={{ title: "" }} />
        <Stack.Screen key="Id27" name="Id27" component={Id27} options={{ title: "" }} />
        <Stack.Screen key="Id28" name="Id28" component={Id28} options={{ title: "" }} />
        <Stack.Screen key="Id29" name="Id29" component={Id29} options={{ title: "" }} />
        <Stack.Screen key="Id30" name="Id30" component={Id30} options={{ title: "" }} />
        <Stack.Screen key="Id31" name="Id31" component={Id31} options={{ title: "" }} />
        <Stack.Screen key="Id32" name="Id32" component={Id32} options={{ title: "" }} />
        <Stack.Screen key="Id33" name="Id33" component={Id33} options={{ title: "" }} />
        <Stack.Screen key="Id34" name="Id34" component={Id34} options={{ title: "" }} />
        <Stack.Screen key="Id35" name="Id35" component={Id35} options={{ title: "" }} />
        <Stack.Screen key="Id36" name="Id36" component={Id36} options={{ title: "" }} />
        <Stack.Screen key="Id37" name="Id37" component={Id37} options={{ title: "" }} />
        <Stack.Screen key="Id38" name="Id38" component={Id38} options={{ title: "" }} />
        <Stack.Screen key="Id39" name="Id39" component={Id39} options={{ title: "" }} />
        <Stack.Screen key="Id40" name="Id40" component={Id40} options={{ title: "" }} />
        <Stack.Screen key="Id41" name="Id41" component={Id41} options={{ title: "" }} />
        <Stack.Screen key="Id42" name="Id42" component={Id42} options={{ title: "" }} />
        <Stack.Screen key="Id43" name="Id43" component={Id43} options={{ title: "" }} />
        <Stack.Screen key="Id44" name="Id44" component={Id44} options={{ title: "" }} />
        <Stack.Screen key="Id45" name="Id45" component={Id45} options={{ title: "" }} />
        <Stack.Screen key="Id46" name="Id46" component={Id46} options={{ title: "" }} />
        <Stack.Screen key="Id47" name="Id47" component={Id47} options={{ title: "" }} />
        <Stack.Screen key="Id48" name="Id48" component={Id48} options={{ title: "" }} />
        <Stack.Screen key="Id49" name="Id49" component={Id49} options={{ title: "" }} />
        <Stack.Screen key="Id50" name="Id50" component={Id50} options={{ title: "" }} />
        <Stack.Screen key="Id51" name="Id51" component={Id51} options={{ title: "" }} />
        <Stack.Screen key="Id52" name="Id52" component={Id52} options={{ title: "" }} />
        <Stack.Screen key="Id53" name="Id53" component={Id53} options={{ title: "" }} />
        <Stack.Screen key="Id54" name="Id54" component={Id54} options={{ title: "" }} />
        <Stack.Screen key="Id55" name="Id55" component={Id55} options={{ title: "" }} />
        <Stack.Screen key="Id56" name="Id56" component={Id56} options={{ title: "" }} />
        <Stack.Screen key="Id57" name="Id57" component={Id57} options={{ title: "" }} />
        <Stack.Screen key="Id58" name="Id58" component={Id58} options={{ title: "" }} />
        <Stack.Screen key="Id59" name="Id59" component={Id59} options={{ title: "" }} />
        <Stack.Screen key="Id60" name="Id60" component={Id60} options={{ title: "" }} />
        <Stack.Screen key="Id61" name="Id61" component={Id61} options={{ title: "" }} />
        <Stack.Screen key="Id62" name="Id62" component={Id62} options={{ title: "" }} />
        <Stack.Screen key="Id63" name="Id63" component={Id63} options={{ title: "" }} />
        <Stack.Screen key="Id64" name="Id64" component={Id64} options={{ title: "" }} />
        <Stack.Screen key="Id65" name="Id65" component={Id65} options={{ title: "" }} />
        <Stack.Screen key="Id66" name="Id66" component={Id66} options={{ title: "" }} />
        <Stack.Screen key="Id67" name="Id67" component={Id67} options={{ title: "" }} />
        <Stack.Screen key="Id68" name="Id68" component={Id68} options={{ title: "" }} />
        <Stack.Screen key="Id69" name="Id69" component={Id69} options={{ title: "" }} />
        <Stack.Screen key="Id70" name="Id70" component={Id70} options={{ title: "" }} />
        <Stack.Screen key="Id71" name="Id71" component={Id71} options={{ title: "" }} />
        <Stack.Screen key="Id72" name="Id72" component={Id72} options={{ title: "" }} />
        <Stack.Screen key="Id73" name="Id73" component={Id73} options={{ title: "" }} />
        <Stack.Screen key="Id74" name="Id74" component={Id74} options={{ title: "" }} />
        <Stack.Screen key="Id75" name="Id75" component={Id75} options={{ title: "" }} />
        <Stack.Screen key="Id76" name="Id76" component={Id76} options={{ title: "" }} />
        <Stack.Screen key="Id77" name="Id77" component={Id77} options={{ title: "" }} />
        <Stack.Screen key="Id78" name="Id78" component={Id78} options={{ title: "" }} />
        <Stack.Screen key="Id79" name="Id79" component={Id79} options={{ title: "" }} />
        <Stack.Screen key="Id80" name="Id80" component={Id80} options={{ title: "" }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  navigator: {
    marginBottom: 20,
    position: 'float',
  },
  header: {
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontWeight: 500,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerButton: {
    padding: 12,
  }, 
   
});
