import { View, Text } from "react-native";

interface SayHelloProps {
    name: string;
    age: number;
}

export function sayHello(name: string, age: number): SayHelloProps {
	return { name, age };
}

export default function SayHelloComponent({ name, age }: SayHelloProps) {
	const isAdult = age > 18;

	return (
		<View>
			<Text>
				Hello {name}, I see {isAdult ? "you're an adult" : "you're a child"}
			</Text>
		</View>
	);
}