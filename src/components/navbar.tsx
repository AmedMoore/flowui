import { Row } from "@flowui/react/layout";
import { Text, DarkModeSwitch } from "@flowui/react/basic";
import Image from "next/image";
import Link from "next/link";
import AppIcon from "./flow-icon.svg";

const Navbar = () => (
  <Row justify="center" customClassName="px-6 py-3 border-b w-full">
    <Row items="center" justify="between" customClassName="container">
      <Row items="end" gap={1}>
        <Link href={"/"}>
          <Row items="center" gap={1}>
            <Image src={AppIcon} alt="FlowUI" width={20} height={20} />
            <Text size="3xl" weight="semibold" customClassName="text-primary-2">
              FlowUI
            </Text>
          </Row>
        </Link>
        <Text color="secondary">{"/"}</Text>
        <Link href={"/"}>
          <Text color="secondary">Docs</Text>
        </Link>
      </Row>
      <Row items="center" gap={6}>
        <DarkModeSwitch />
      </Row>
    </Row>
  </Row>
);

export default Navbar;
