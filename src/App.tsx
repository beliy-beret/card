import { Button } from './components/ui/button'

export function App() {
  return (
    <div>
      <Button>Click me</Button>
      <Button as="a" href="/link">
        Click me
      </Button>
    </div>
  )
}
