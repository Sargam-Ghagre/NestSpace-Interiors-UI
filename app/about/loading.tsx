export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="animate-pulse space-y-4">
            <div className="h-12 w-3/4 bg-muted rounded-lg"></div>
            <div className="h-6 w-full bg-muted rounded"></div>
            <div className="h-6 w-5/6 bg-muted rounded"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="h-64 bg-muted rounded-xl animate-pulse"></div>
            <div className="h-64 bg-muted rounded-xl animate-pulse"></div>
          </div>
          <div className="space-y-4">
            <div className="h-8 w-1/2 bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-full bg-muted rounded animate-pulse"></div>
            <div className="h-4 w-4/5 bg-muted rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
