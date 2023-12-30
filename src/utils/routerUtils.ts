import routes from "@/router";

export function getRouteChildren(name: string) {

  const res = routes.find(e => e.name === name)
  if (res && res.children) {
    return res.children
  } else {
    return []
  }
}