import { View as DefaultView } from "react-native";
import {
  Text as PaperText,
  Button as PaperButton,
  useTheme,
} from "react-native-paper";

export function Text(props) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return <PaperText style={[{ color: colors.text }, style]} {...otherProps} />;
}

export function View(props) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultView
      style={[{ backgroundColor: colors.background }, style]}
      {...otherProps}
    />
  );
}

export function Button(props) {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <PaperButton
      textColor={colors.background}
      style={[{ backgroundColor: colors.primary, borderRadius: 6 }, style]}
      {...otherProps}
    />
  );
}
