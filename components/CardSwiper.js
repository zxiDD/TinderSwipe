import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import Swiper from 'react-native-deck-swiper';

const CardSwiper = () => {
  const [cards, setCards] = useState([
    { id: 1 , color: '#92CDF3'},
    { id: 2, color: '#80E7BA'},
    { id: 3, color: '#FCD689'},
    { id: 4, color: '#D68D65'}
  ]);
  const [swipingDirection, setSwipingDirection] = useState(null)
  const cardWidth = 250
  const cardHeight = 400

  const renderCard = (card) => (
    <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
    <View key={card.id} style={{ width:cardWidth, height:cardHeight, backgroundColor: card.color, borderRadius: 10, padding: 20 }}>
    </View>
    </View>
  );

  const onSwiping = (index, direction) => {
    setSwipingDirection(direction)
  };

  const onSwiped = (index, direction) => {
    setSwipingDirection(null)
  };

  return (
    <Swiper
      cards={cards}
      renderCard={renderCard}
      onSwiping={(index, direction)=>onSwiping(index, direction)}
      onSwiped={(index, direction)=>onSwiped(index, direction)}
      cardIndex={0}
      backgroundColor="transparent"
      stackSize={4}
      stackSeparation={15}
      verticalSwipe={false}
      overlayLabels={{
        left: {
          element: <Image source={require('../assets/cross.png')} style={{width:50, height:50}}></Image>,
          style: {
            wrapper:{
              flexDirection:'column',
              alignItems:"flex-end",
              justifyContent:"flex-start",
              top:cardHeight*0.4,
              right:cardWidth*0.3
            }
          }  
        },
        right: {
          element: <Image source={require('../assets/check.png')} style={{width:50, height:50}}></Image>,
          style: {
            wrapper:{
              flexDirection:'column',
              alignItems:"flex-start",
              justifyContent:"flex-start",
              top:cardHeight*0.4,
              left:cardWidth*0.3
            }
          }  
        },
      }}
      animateCardOpacity={true}
      animateOverlayLabelsOpacity={true}
      overlayOpacityHorizontalThreshold={cardWidth/6}
    />
  );
};

export default CardSwiper;
