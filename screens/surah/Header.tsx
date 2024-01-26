import { View } from "react-native";
import BigArrow from "@/assets/icons/big_arrow.svg";
import Menu from "@/assets/icons/Menu.svg";
import { Text } from "react-native";
import { Surah as SurahType } from "@/types/Suar";
import { router } from "expo-router";

export function Header({
  title,
  subtitle,
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <View className="flex flex-row justify-between  py-4 px-2 h-[9%]  bg-white items-center">
      <Menu width={24} height={32} />
      <View className="bg-white flex items-center">
        <Text className="font-HelveticaRoman text-lg text-primary">
          {title}
        </Text>
        <Text className="font-HelveticaRoman text-primary/30 text-xs">
          {subtitle}
        </Text>
      </View>
      <BigArrow
        onPress={() => {
          router.back();
        }}
        height={28}
        width={20}
      />
    </View>
  );
}
