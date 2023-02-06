import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

export function Banners() {
  const images = [
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image1.jpg'),
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image2.jpg'),
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image3.jpg'),
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image4.jpg'),
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image5.jpg'),
    require('D:\\Diamond\\Diamond\\src\\images\\bannerImages\\image6.jpg'),
  ];
  return (
    <View>
      <SliderBox
        images={images}
        dotColor="red"
        inactiveDotColor="black"
        imageLoadingColor="black"
        circleLoop='true'
        autoplay='true'
        autopalyInterval='2000'
      />
    </View>
  );
}

export default Banners;
