interface Props {
  onPrev?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  disableNext?: boolean;
}

export default function NavButtons({
  onPrev,
  onNext,
  nextLabel = "Continuer",
  prevLabel = "Retour",
  disableNext = false,
}: Props) {
  return (
    <div className="flex justify-between items-center mt-8 pt-6 border-t border-sable">
      {onPrev ? (
        <button
          type="button"
          onClick={onPrev}
          className="text-brun/60 hover:text-brun font-medium text-sm flex items-center gap-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {prevLabel}
        </button>
      ) : (
        <div />
      )}
      {onNext && (
        <button
          type="button"
          onClick={onNext}
          disabled={disableNext}
          className="btn-orange px-6 py-2.5 rounded-full font-medium disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
        >
          {nextLabel}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
