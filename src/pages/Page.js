import {SharedElement} from 'react-navigation-shared-element';
import React from 'react';
import {StatusBar, Text, Image, Button, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default Page = ({navigation, route}) => {
  const {icon, name, content, id} = route.params.selected;

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0455BF" />
      <View style={{flexGrow: 1, flex: 1, backgroundColor: '#0455BF'}}>
        <View
          style={{
            flexGrow: 1,
            flex: 1,
            backgroundColor: '#fff',
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 120,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                height: 150,
                width: 150,
                borderRadius: 999,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
              }}>
              <SharedElement id={`item.${id}.photo`}>
                <Image style={{width: 'auto', height: 'auto'}} source={icon} />
              </SharedElement>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={{marginHorizontal: 25, marginBottom: 10}}>
              {content.map((item, index) => {
                if (item.type == 'paragraph') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#656565',
                        textAlign: 'justify',
                        lineHeight: 30,
                        marginBottom: 10,
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'title') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#494848',
                        textAlign: 'justify',
                        lineHeight: 40,
                        fontFamily: 'Roboto-Bold',
                        marginBottom: 10,
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'item') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#656565',
                        textAlign: 'justify',
                        lineHeight: 30,
                        marginBottom: 10,
                        marginLeft: 20,
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'subItem') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#656565',
                        textAlign: 'justify',
                        lineHeight: 30,
                        marginBottom: 10,
                        marginLeft: 50,
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'subSubItem') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#656565',
                        textAlign: 'justify',
                        lineHeight: 30,
                        marginBottom: 10,
                        marginLeft: 80,
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'quote') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 18,
                        color: '#656565',
                        textAlign: 'justify',
                        lineHeight: 30,
                        marginBottom: 10,
                        marginLeft: 40,
                        fontFamily: 'Roboto-Light',
                      }}>
                      {item.data}
                    </Text>
                  );
                } else if (item.type == 'titleCenter') {
                  return (
                    <Text
                      key={index}
                      style={{
                        fontSize: 20,
                        color: '#494848',
                        textAlign: 'center',
                        fontFamily: 'Roboto-Bold',
                        lineHeight: 30,
                        marginBottom: 10,
                      }}>
                      {item.data}
                    </Text>
                  );
                }
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
