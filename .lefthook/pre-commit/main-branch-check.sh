branch=$(git symbolic-ref --short HEAD)
if [ "$branch" = "main" ]; then
  echo "You can't commit directly to the main branch."
  exit 1
fi
exit 0