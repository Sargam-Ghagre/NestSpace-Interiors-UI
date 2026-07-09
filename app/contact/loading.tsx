export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-6 mb-12">
            <div className="h-10 w-48 bg-muted rounded"></div>
            <div className="h-6 w-full max-w-xl bg-muted rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="h-48 bg-muted rounded-xl animate-pulse"></div>
              <div className="h-32 bg-muted rounded-xl animate-pulse"></div>
            </div>
            <div className="space-y-4">
              <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-12 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-32 bg-muted rounded-lg animate-pulse"></div>
              <div className="h-12 w-32 bg-muted rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
