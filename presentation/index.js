// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  S,
  Slide,
  SlideSet,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableItem,
  TableRow,
  Table,
  Text,
  Typeface
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  splash: require("../assets/splash.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/graphql_logo.png"),
  markdown: require("../assets/markdown.png"),
  full_profile: require("../assets/full_user_profile.png"),
  why: require("../assets/why.gif"),
  user_widget: require("../assets/user_widget.jpg"),
  annoyed: require("../assets/annoyed.gif"),
  widget_query: require("../assets/widget_query.png"),
  graphql_architechture: require("../assets/graphql_architechture.png"),
  graphql_vs_rest: require("../assets/graphql_vs_rest.png"),
  graphql_result: require("../assets/graphql_result.png"),
  graphql_result_2: require("../assets/graphql_result_2.png"),
  live: require("../assets/live.gif"),
  dance: require("../assets/dance.gif"),
  rest: require("../assets/rest.png"), 
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#e10098",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["fade"]} bgImage={images.splash.replace("/", "")} bgDarken={0.50} textColor="tertiary">
          <Image src={images.logo.replace("/", "")} margin="0px auto 20px" height="200px"/>
          <Heading size={1} textColor="primary" caps>Intro to GraphQL</Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            What is GraphQL?
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              What do you think it is?
          </Text>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary" margin="30px auto" >
            Does everyone know what rest is?
          </Heading>
          <Image src={images.rest.replace("/", "")} margin="0px auto 40px" height="550px" />
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
            <Link href="https://api.meetup.com/2/rsvps?offset=0&format=json&rsvp=yes&event_id=238695705&photo-host=public&page=100&fields=&omit=venue%2Cmember_photo%2Ccreated%2Cguests%2Crsvp_id%2Cevent%2Cgroup%2Cresponse%2Cmtime&order=event&desc=false&sig_id=161221962&sig=95ffa0225a060c087abd27bc9a55159b79da48b1">Lets get your names</Link>
            <Appear><Text margin="30px 0">https://api.meetup.com/2/rsvps</Text></Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={5} fit caps lineHeight={1} textColor="secondary" margin="30px auto" >
            So what's the problem?
          </Heading>
          <Appear>
            <Image src={images.full_profile.replace("/", "")} margin="0px auto 40px" height="650px" />
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/code/user_rest_response.example")}
            margin="-280px auto"
          />
        </Slide>
        <Slide bgColor="tertiary">
          <Image src={images.why.replace("/", "")} margin="0px auto 40px" height="550px" />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="40px 0" textColor="primary" size={1} fit bold>
            Meanwhile..in another place
          </Text>
          <Image src={images.user_widget.replace("/", "")} margin="0px auto 40px" height="550px" />
        </Slide>
        <Slide bgColor="tertiary">
          <Text margin="40px 0" textColor="primary" size={1} fit bold>
            And now you're wonnderring...
          </Text>
          <Image src={images.annoyed.replace("/", "")} margin="0px auto 40px" height="550px" />
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={58} bold>
            but now what if...
          </Text>
          <Image src={images.widget_query.replace("/", "")} margin="0px auto 40px" height="600px" />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.dance.replace("/", "")} margin="0px auto 40px" height="600px" />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>And that's GraphQL</Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>Some Problems with REST 😕</Heading>
          <List>
            <Appear><ListItem>lots of endpoints</ListItem></Appear>
            <Appear><ListItem>ambigous endpoints</ListItem></Appear>
            <Appear><ListItem>weird boundaries btwn client & servers</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44} bold>
            Where GraphQL sits in your architecture
          </Text>
          <Image src={images.graphql_architechture.replace("/", "")} margin="0px auto 40px" height="600px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps> 🎸 Why GraphQL Rocks 🙌</Heading>
          <List>
            <Appear><ListItem>traverse related objects and their fields</ListItem></Appear>
            <Appear><ListItem>fetch lots of related data in one request</ListItem></Appear>
            <Appear><ListItem>avoid making several roundtrips</ListItem></Appear>
            <Appear><ListItem>Decouple API and database schemas</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            textSize={58}
            lang="json"
            source={require("raw-loader!../assets/code/graphql-hello.example")}
            margin="-280px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            textSize={48}
            lang="json"
            source={require("raw-loader!../assets/code/graphql-hello-2.example")}
            margin="-280px auto"
          />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.graphql_result.replace("/", "")} margin="0px auto 40px" height="600px" />
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.graphql_result_2.replace("/", "")} margin="0px auto 40px" height="650px" />
        </Slide>
        <Slide bgColor="secondary">
          <Text margin="40px 0" textColor="primary" textSize={44} bold>
            Let's do it live
          </Text>
          <Image src={images.live.replace("/", "")} margin="0px auto 40px" height="500px" />          
          <ListItem>https://www.graphqlhub.com/playground</ListItem>
          <ListItem>http://graphql.org/swapi-graphql</ListItem>          
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            textSize={20}
            lang="jsx"
            source={require("raw-loader!../assets/code/listpage_react.example")}
            margin="-280px auto"
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            textSize={32}
            lang="jsx"
            source={require("raw-loader!../assets/code/react_with_graphql.example")}
            margin="-280px auto"
          />
        </Slide>
      </Deck>
    );
  }
}
