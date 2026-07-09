export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center animate-pulse space-y-4">
            <div className="h-10 w-48 mx-auto bg-muted rounded"></div>
            <div className="h-6 w-96 mx-auto bg-muted rounded"></div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
