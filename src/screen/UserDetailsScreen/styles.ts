import {StyleSheet} from 'react-native';
import {AppColors, wp} from '../../utils';

export const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: AppColors.PRIMARY_BACKGROUND,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1),
  },
  image: {
    height: wp(30),
    width: wp(30),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(30),
  },
  container: {
    paddingTop: wp(90),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
