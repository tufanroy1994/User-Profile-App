import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.GREY_TEXT1,
    padding: wp(3),
    width: wp(30),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: AppColors.BLACK_TEXT,
    fontSize: FontSizes.FONT_SIZE_16,
  },
});
