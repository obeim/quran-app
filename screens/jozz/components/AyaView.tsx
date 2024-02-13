import { useLocalSearchParams } from "expo-router";
import { FlatList } from "react-native";
import useOnAyaScrolling from "@/utils/useOnAyaScrolling";
import useScrollToAya from "@/utils/useScrollToAya";
import { AyahItem } from "./AyahItem";
import { Ayah } from "@/types";

export interface PageProps {
  data?: Ayah[];
  onPress?: (aya: Ayah) => void;
}
export function AyatView({ data, onPress }: PageProps) {
  const local = useLocalSearchParams();

  const { flatListRef, onScrollToIndexFailed } = useScrollToAya();
  const { viewabilityConfigCallbackPairs } = useOnAyaScrolling({
    type: "jozz",
  });

  return (
    <FlatList
      ref={flatListRef as any}
      data={data}
      viewabilityConfigCallbackPairs={
        viewabilityConfigCallbackPairs.current as any
      }
      initialNumToRender={
        parseInt((local.id as string).split("s")[1]) + 2 || undefined
      }
      onScrollToIndexFailed={onScrollToIndexFailed}
      renderItem={({ item, index }) => (
        <AyahItem
          key={index}
          onPress={() => {
            onPress?.(item);
          }}
          {...{ item, id: local.id as string, index, data: data }}
        />
      )}
      className="w-full bg-lotion dark:bg-blackCoral h-[93%] px-5 overflow-hidden"
    />
  );
}
