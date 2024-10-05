import { useGetCategoriesQuery } from "@/store/api/endpoints/category";
import { useGetProductsQuery } from "@/store/api/endpoints/product";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const { data: products } = useGetProductsQuery({});

  return (
    <View className="flex-1">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1">
        <View className="mt-8">
          <View className="flex-row justify-between items-center px-4">
            <Text className="text-2xl font-bold text-gray-900">
              New Arrivals
            </Text>
            <TouchableOpacity>
              <Text className="text-sm font-semibold text-blue-600">
                See All
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4 px-4"
          >
            {products?.map((product: Product) => (
              <TouchableOpacity key={product.id} className="mr-6">
                <Image
                  source={{ uri: product.image }}
                  className="w-40 h-56 rounded-lg"
                  resizeMode="cover"
                />
                <Text className="mt-2 text-sm font-medium text-gray-900">
                  {product.title.slice(0, 20)}...
                </Text>
                <Text className="mt-1 text-sm font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View className="mt-8 mb-8">
          <Text className="px-4 text-2xl font-bold text-gray-900">
            Featured
          </Text>
          <View className="flex-row flex-wrap justify-between mt-4">
            {products?.map((product: Product) => (
              <TouchableOpacity key={product.id} className="w-[48%] mb-4">
                <Image
                  source={{ uri: product.image }}
                  className="w-full h-56 rounded-lg p-3"
                  resizeMode="contain"
                />
                <Text className="mt-2 text-sm font-medium text-gray-900">
                  {product.title.slice(0, 20)}...
                </Text>
                <Text className="mt-1 text-sm font-semibold text-gray-900">
                  ${product.price.toFixed(2)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
