// index.tsx (in the root directory)
import { ExpoRoot } from 'expo-router';
import { registerRootComponent } from 'expo';

export function App() {
    const ctx = (require as any).context('./app', true, /\.tsx$/);
    return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);