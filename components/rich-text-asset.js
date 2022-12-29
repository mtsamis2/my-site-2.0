export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return <img src={asset.url} layout="fill" alt={asset.description} /> // TODO: Use Image instead of img here
  }

  return null
}
