import { Container } from "@/components/container"

export default function MapsPage() {
  return (
    <Container>
      <p className="leading-relaxed mb-4">
        Will update soon
      </p>

      <div className="rounded-lg border border-border overflow-hidden">
        <iframe
          title="Travel map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-180%2C-85%2C180%2C85&layer=mapnik"
          className="w-full aspect-video"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Container>
  )
}
