import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function MonitorScreen() {
  const [lastDetection, setLastDetection] = useState<Date | null>(null);

  useEffect(() => {
    // Simulated detection every 30 seconds
    const interval = setInterval(() => {
      setLastDetection(new Date());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cat Activity Monitor</Text>
      <Text style={styles.detection}>
        {lastDetection
          ? `Last detection: ${lastDetection.toLocaleString()}`
          : "No detections yet"}
      </Text>
      <Button
        title="Simulate Detection"
        onPress={() => setLastDetection(new Date())}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detection: {
    fontSize: 16,
    marginBottom: 20,
  },
});
