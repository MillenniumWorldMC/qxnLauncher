import { BoxProps, HStack, Heading, Highlight, Image } from "@chakra-ui/react";
import styles from "@/styles/logo-title.module.css";

interface LogoTitleProps extends BoxProps {}

const APP_NAME = "qxnLauncher";

export const TitleShort: React.FC<LogoTitleProps> = (props) => {
  return (
    <Heading size="md" className={styles.title} {...props}>
      <Highlight query="qxn" styles={{ color: "qxn.500", userSelect: "none" }}>
        {APP_NAME}
      </Highlight>
    </Heading>
  );
};

export const TitleFull: React.FC<LogoTitleProps> = (props) => {
  return (
    <Heading size="md" className={styles.title} {...props}>
      <Highlight query="qxn" styles={{ color: "qxn.500", userSelect: "none" }}>
        {APP_NAME}
      </Highlight>
    </Heading>
  );
};

export const TitleFullWithLogo: React.FC<LogoTitleProps> = (props) => {
  return (
    <HStack>
      <Image src="/images/icons/Logo_128x128.png" alt="Logo" boxSize="36px" />
      <TitleFull {...props} />
    </HStack>
  );
};
