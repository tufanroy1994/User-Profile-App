import {StyleSheet} from 'react-native';
import {AppColors, FontSizes, hp, wp} from '../../utils';

export const styles = StyleSheet.create({
  container: {},
  titleText: {
    color: AppColors.BLACK_TEXT,
    marginHorizontal: wp(2),
    marginBottom: wp(2),
    fontSize: FontSizes.FONT_SIZE_16,
    fontWeight: '900',
  },
  inputContainerStyle: {
    flexDirection: 'row',
    gap: wp(3),
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: wp(3),
    paddingHorizontal: wp(3),
    borderColor: AppColors.TAB_BORDER,
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    height: hp(5),
    marginBottom: wp(5),
  },
  inputStyle: {
    flex: 1,
    fontSize: FontSizes.FONT_SIZE_16,
    color: AppColors.BLACK_TEXT,
    padding: 0,
    paddingVertical: hp(0.7),
  },
});
