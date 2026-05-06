import {NavigationContainer,useNavigation,useRoute} from "@react-navigation/native";
import {createNativeStackNavigator } from "@react-navigation/native-stack";
import {Cell, Section, TableView } from "react-native-tableview-simple";
import {Text,View,ScrollView,Image,SafeAreaView,Alert,} from "react-native";

//Home//
function Restaurants() {
  const navigation = useNavigation();

  const restaurantsData = [
    {
      title: "Cris's Cafe",
      tagline: "Dessert, Ice cream, Coffee",
      eta: "5-15",
      imgUri: require("./assets/CrisCafe.jpg"),
      menu: [
        {
          title: "Dessert",
          contents: [
            {
              title: "Tiramisu",
              rating: "⭐ 4.8",
              img: require("./assets/tiramisu.jpg"),
            },
            {
              title: "Cris's Special",
              rating: "⭐ 4.7",
              img: require("./assets/special.jpg"),
            },
          ],
        },
        {
          title: "Gelato",
          contents: [
            {
              title: "Vanilla",
              rating: "⭐ 4.6",
              img: require("./assets/vanilla.jpg"),
            },
            {
              title: "Chocolate",
              rating: "⭐ 4.9",
              img: require("./assets/chocolate.jpg"),
            },
          ],
        },
        {
          title: "Coffee",
          contents: [
            {
              title: "Espresso",
              rating: "⭐ 4.5",
              img: require("./assets/espresso.jpg"),
            },
            {
              title: "Latte",
              rating: "⭐ 4.6",
              img: require("./assets/latte.jpg"),
            },
          ],
        },
      ],
    },
    {
      title: "Cris's Diner",
      tagline: "Pizza, Burgers, Pasta",
      eta: "40+",
      imgUri: require("./assets/Crisdiner.jpg"),
      menu: [
        {
          title: "Pizza",
          contents: [
            {
              title: "Margherita",
              rating: "⭐ 4.3",
              img: require("./assets/margherita.jpg"),
            },
            {
              title: "Pepperoni",
              rating: "⭐ 4.4",
              img: require("./assets/pepperoni.jpg"),
            },
          ],
        },
        {
          title: "Burgers",
          contents: [
            {
              title: "Beef Burger",
              rating: "⭐ 4.2",
              img: require("./assets/beefburger.jpg"),
            },
            {
              title: "Chicken Burger",
              rating: "⭐ 4.1",
              img: require("./assets/chickenburger.jpg"),
            },
          ],
        },
        {
          title: "Pasta",
          contents: [
            {
              title: "Carbonara (bacon/chicken)",
              rating: "⭐ 4.0",
              img: require("./assets/carbonara.jpg"),
            },
            {
              title: "Aglio Olio (Seafood/Smoked Duck)",
              rating: "⭐ 4.2",
              img: require("./assets/aglioolio.jpg"),
            },
          ],
        },
      ],
    },
  ];

  const HomeScreenCell = ({action,etaLabel,customRestaurantLabel,customRestaurantSubLabel,
  customRestaurantLabelStyle,customRestaurantSubLabelStyle,customStyle,imageSrc,imageStyle,}) => (
    <Cell
      backgroundColor="transparent"
      highlightUnderlayColor="#eee"
      onPress={action}
      cellAccessoryView={
        <View style={customStyle}>
          <Image
            style={[imageStyle, { resizeMode: "cover" }]}
            source={imageSrc}
          />
          <View
            style={{
              width: 100,
              height: 60,
              backgroundColor: "#FFFFE0",
              borderRadius: 50,
              position: "absolute",
              right: 20,
              top: 170,
              justifyContent: "center",
              elevation: 4,
              shadowColor: "#000",
              shadowOpacity: 0.2,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {etaLabel}
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontWeight: "bold",
                textAlign: "center",
                marginTop: -5,
              }}
            >
              mins
            </Text>
          </View>
          <Text style={customRestaurantLabelStyle}>{customRestaurantLabel}</Text>
          <Text style={customRestaurantSubLabelStyle}>
            {customRestaurantSubLabel}
          </Text>
        </View>
      }
    />
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3e5f5" }}>
      <ScrollView>
        <TableView>
          <Section hideSeparator separatorTintColor="#ccc">
            {restaurantsData.map((restaurant, i) => (
              <HomeScreenCell
                key={i}
                etaLabel={restaurant.eta}
                customRestaurantLabel={restaurant.title}
                customRestaurantLabelStyle={{
                  marginTop: 5,
                  fontSize: 20,
                  fontWeight: "bold",
                }}
                customRestaurantSubLabel={restaurant.tagline}
                customRestaurantSubLabelStyle={{
                  marginTop: 5,
                  fontSize: 14,
                }}
                customStyle={{
                  width: "100%",
                  height: 280,
                  backgroundColor: "#fceea7",
                  marginLeft: 2,
                }}
                imageSrc={restaurant.imgUri}
                imageStyle={{ width: "100%", height: 200, borderRadius: 5 }}
                action={() =>
                  navigation.navigate("Menu", { items: restaurant.menu })
                }
              />
            ))}
          </Section>
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

//Menu//
function Menu() {
  const route = useRoute();
  const items = route.params.items;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f3e5f5" }}>
      <ScrollView>
        <TableView>
          {items.map((section, idx) => (
            <Section
              key={idx}
              separatorTintColor="#ccc"
              headerComponent={
                <View
                  style={{
                    backgroundColor: "#f3e5f5",
                    padding: 10,
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontSize: 18,
                      fontWeight: "bold",
                    }}
                  >
                    {section.title}
                  </Text>
                </View>
              }
            >
              {section.contents.map((content, j) => (
                <Cell
                  key={j}
                  cellStyle="Subtitle" // ✅ Enables title + detail
                  title={content.title}
                  detail={content.rating}
                  backgroundColor="#fff9c4"
                  titleTextColor="black"
                  titleTextStyle={{ fontWeight: "bold", fontSize: 16 }}
                  detailTextStyle={{ color: "#000000", fontSize: 14 }}
                  onPress={() =>
                    Alert.alert("Added to Cart", `${content.title} added!`)
                  }
                  cellAccessoryView={
                    <Image
                      source={content.img}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 5,
                        marginRight: 10,
                      }}
                    />
                  }
                />
              ))}
            </Section>
          ))}
        </TableView>
      </ScrollView>
    </SafeAreaView>
  );
}

//Navigation//
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#fffde7" },
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            color: "black",
          },
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="Restaurants" component={Restaurants} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
