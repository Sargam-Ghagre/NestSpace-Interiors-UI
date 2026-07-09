export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-pulse space-y-4">
            <div className="h-10 w-64 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-5/6 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
          </div>
          <div className="h-px bg-muted"></div>
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-4/5 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
          </div>
          <div className="h-px bg-muted"></div>
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 bg-muted rounded"></div>
            <div className="h-4 w-full bg-muted rounded"></div>
            <div className="h-4 w-3/4 bg-muted rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
